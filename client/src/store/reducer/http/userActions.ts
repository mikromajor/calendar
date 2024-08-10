import {
  createAsyncThunk,
  Dispatch,
} from "@reduxjs/toolkit";
import { appActions } from "../appReducer";
import { alcoActions } from "../alcoReducer";
import {
  IServerRes,
  EmailPassword,
} from "../../../types/appTypes";
import { YearInfo } from "../../../types/alcoTypes";
import { $host, $authHost } from "./host";
import { AxiosError, AxiosResponse } from "axios";

const saveTokenToLocalStorage = (token: string) => {
  !!token && localStorage.setItem("token", token);
};
export const cleanMessageWithDelay =
  () => (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(appActions.clearMessage());
    }, 10000);
  };

export const fetchUserRegistration = createAsyncThunk(
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

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (
    emailPassword: EmailPassword,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const response = await $host.post<IServerRes>(
        "api/user/login",
        emailPassword
      );
      // dispatch(
      //   alcoActions.changeAlcoYear(response.data.alcoYear)
      // ); // TODO fix send data
      saveTokenToLocalStorage(response.data?.token);
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserAuth = createAsyncThunk(
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
