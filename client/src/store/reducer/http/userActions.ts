import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  IUser,
  EmailPassword,
} from "../../../types/appTypes";
import { $host, $authHost } from "./host";
import { AxiosError, AxiosResponse } from "axios";

export const fetchUserRegistration = createAsyncThunk(
  "user/fetchUserRegistration",
  async (
    emailPassword: EmailPassword,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const res = await $host.post<IUser>(
        "api/user/registration",
        emailPassword
      );
      const token = res.data?.token;
      !!token && localStorage.setItem("token", token);
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
  async (emailPassword: EmailPassword, thunkAPI) => {
    try {
      const response = await $host.post<IUser>(
        "api/user/login",
        emailPassword
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "user/fetchUserLogin catch error"
      );
    }
  }
);

export const fetchUserAuth = createAsyncThunk(
  "user/fetchUserAuth",
  async (_, thunkAPI) => {
    try {
      const response = await $authHost.get<IUser>(
        "api/user/auth"
      );
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "user/fetchUserAuth catch error"
      );
    }
  }
);
