import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IServerRes,
  EmailPassword,
} from "../../../types/userTypes";
import { $host, $authHost } from "./host";
import alcoReducer, { alcoActions } from "../alcoReducer";
import { serviceActions } from "../serviceReducer";
import { ERROR } from "../../../constants/serviceConstants";

const saveToken = (token: string) =>
  localStorage.setItem("token", token);

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
      let token = res.data?.token;
      let message = res.data?.message;
      token && saveToken(token);
      dispatch(
        serviceActions.responseOk(message ? message : "")
      );
    } catch (error: any) {
      let message = error?.response?.data?.message;
      dispatch(
        serviceActions.responseReject(
          message ? message : ERROR.noResponse
        )
      );
      console.log("Server error: ", error);
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
    let res;
    try {
      res = await $host.post<IServerRes>(
        "api/user/login",
        emailPassword
      );
      let token = res.data?.token;
      let message = res.data?.message;
      let alcoState = res.data?.alcoState;

      token && saveToken(token);

      dispatch(
        serviceActions.responseOk(message ? message : "")
      );

      alcoState &&
        dispatch(
          alcoActions.updateAlcoSliceAfterLogin(alcoState)
        );
    } catch (error: any) {
      let message = error?.response?.data?.message;
      dispatch(
        serviceActions.responseReject(
          message ? message : ERROR.noResponse
        )
      );
      console.log("Server error: ", error);
    }
  }
);
//AUTH
const fetchUserAuth = createAsyncThunk(
  "user/fetchUserAuth",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await $authHost.get<IServerRes>(
        "api/user/auth"
      );
      let token = res.data?.token;
      let message = res.data?.message;

      token && saveToken(token);

      dispatch(
        serviceActions.responseOk(message ? message : "")
      );
    } catch (error: any) {
      let message = error?.response?.data?.message;
      dispatch(
        serviceActions.responseReject(
          message ? message : ERROR.noResponse
        )
      );
      console.log("Server error: ", error);
    }
  }
);
export {
  fetchUserAuth,
  fetchUserLogin,
  fetchUserRegistration,
};
