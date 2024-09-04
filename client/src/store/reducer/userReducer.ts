import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { INIT_USER_STATE } from "../../constants/userConstants";
import {
  UserLanguages,
  UserThemes,
  IUser,
} from "../../types/userTypes";
import { IServerRes } from "../../types/userTypes";
import { MESSAGES } from "../../constants/userConstants";

import {
  fetchUserAuth,
  fetchUserLogin,
  fetchUserRegistration,
} from "./http/userActions";

export const userReducer = createSlice({
  name: "userSlice",
  initialState: INIT_USER_STATE,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<UserLanguages>
    ) => {
      state.currentLang = action.payload;
    },
    changeTheme: (
      state,
      action: PayloadAction<UserThemes>
    ) => {
      state.currentTheme = action.payload;
    },
    // addMessage: (state, action: PayloadAction<string>) => {
    //   state.service.message = action.payload;
    // },
    logOut: (state) => {
      localStorage.setItem("token", "");
      state.service.message = "logged out successfully";
    },
    cleanMessage: (state) => {
      state.service.message = "";
      state.service.isError = false;
    },
  },
  extraReducers: {
    //Registration
    [fetchUserRegistration.pending.type]: (state) => {
      state.service.isLoading = true;
    },
    [fetchUserRegistration.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      state.service.message = action.payload.message;
      state.service.isLoading = false;
      state.service.isError = false;
    },

    [fetchUserRegistration.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const message = action.payload.message;

      state.service.message = message
        ? message
        : MESSAGES.unexpectedError;
      state.service.isLoading = false;
      state.service.isError = true;
    },

    //Login
    [fetchUserLogin.pending.type]: (state) => {
      state.service.isLoading = true;
    },
    [fetchUserLogin.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const { message } = action.payload;

      state.service.message = message;
      state.service.isError = false;
      state.service.isLoading = false;
    },

    [fetchUserLogin.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const message = action.payload?.message;
      state.service.message = message
        ? message
        : MESSAGES.unexpectedError;
      state.service.isLoading = false;
      state.service.isError = true;
    },
    //Auth
    [fetchUserAuth.pending.type]: (state) => {
      state.service.isLoading = true;
    },
    [fetchUserAuth.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
      state.service.isLoading = false;
      state.service.isError = false;
    },

    [fetchUserAuth.rejected.type]: (state) => {
      state.service.isLoading = false;
      state.service.isError = true;
      state.service.message = MESSAGES.authRefused;
    },
  },
});

export default userReducer.reducer;
export const userActions = userReducer.actions;
export const userSlice = userReducer;
