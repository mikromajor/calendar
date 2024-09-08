import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import SERVICE_INIT from "../../constants/serviceConstants";
import {
  IServerRes,
  IUserResReject,
} from "../../types/userTypes";
import { MESSAGES } from "../../constants/userConstants";

export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState: SERVICE_INIT,
  reducers: {
    // addMessage: (serviceState, action: PayloadAction<string>) => {
    //   serviceState.message = action.payload;
    // },
    requestFire: (serviceState) => {
      serviceState.isLoading = true;
      serviceState.message = "";
    },
    responseOk: (
      serviceState,
      action: PayloadAction<IServerRes>
    ) => {
      serviceState.isLoading = false;
      serviceState.isError = false;
      serviceState.message = action.payload.message;
    },
    responseReject: (
      serviceState,
      action: PayloadAction<IUserResReject>
    ) => {
      serviceState.isLoading = false;
      serviceState.isError = true;
      serviceState.message = action.payload.message;
    },
    logOut: (serviceState) => {
      localStorage.setItem("token", "");
      serviceState.message = "logged out successfully";
    },
    resetMessage: (serviceState) => {
      serviceState.message = "";
      serviceState.isError = false;
    },
  },
});

export default serviceSlice.reducer;
export const serviceActions = serviceSlice.actions;
