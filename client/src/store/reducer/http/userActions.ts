import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IServerRes,
  EmailPassword,
} from "../../../types/userTypes";
import { $host, $authHost } from "./host";
import { alcoActions } from "../alcoReducer";

const saveTokenToLocalStorage = (token: string) => {
  !!token && localStorage.setItem("token", token);
};
//REGISTRATION
const fetchUserRegistration = createAsyncThunk(
  "user/fetchUserRegistration",
  async (
    emailPassword: EmailPassword,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const res = await $host.post<IServerRes>(
        "api/user/registration",
        emailPassword
      );
      saveTokenToLocalStorage(res.data?.token);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
//LOGIN
const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (
    emailPassword: EmailPassword,
    { rejectWithValue, dispatch, getState }
  ) => {
    let response;
    try {
      response = await $host.post<IServerRes>(
        "api/user/login",
        emailPassword
      );
      saveTokenToLocalStorage(response.data?.token);
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }

    try {
      dispatch(
        alcoActions.changeYear(response.data.alcoState)
      );
    } catch (error) {
      response.data.message =
        "ERROR. Problem with dispatch in fetchUserLogin";
    }

    return response.data;
  }
);
//AUTH
const fetchUserAuth = createAsyncThunk(
  "user/fetchUserAuth",
  async (_, thunkAPI) => {
    try {
      const response = await $authHost.get<IServerRes>(
        "api/user/auth"
      );
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export {
  fetchUserAuth,
  fetchUserLogin,
  fetchUserRegistration,
};
