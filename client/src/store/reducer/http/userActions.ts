import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  IUser,
  EmailPassword,
} from "../../../types/appTypes";
import { $host, $authHost } from "./host";

export const fetchUserRegistration = createAsyncThunk(
  "user/fetchUserRegistration",
  async (
    emailPassword: EmailPassword,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const { data } = await $host.post<IUser>(
        "api/user/registration",
        emailPassword
      );
      localStorage.setItem("token", data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e);
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
      return thunkAPI.rejectWithValue(e);
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
      return thunkAPI.rejectWithValue(e);
    }
  }
);
