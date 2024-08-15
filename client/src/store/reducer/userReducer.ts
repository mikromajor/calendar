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
    addMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    logOut: (state) => {
      state.message = "logged out successfully";
    },
    cleanMessage: (state) => {
      state.message = "";
      state.isError = false;
    },
  },
  extraReducers: {
    //Registration
    [fetchUserRegistration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserRegistration.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const { token, message } = action.payload;
      state.message = message;
      state.isLoading = false;
      state.isError = false;
    },

    [fetchUserRegistration.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const message = action.payload.message;

      state.message = message
        ? message
        : MESSAGES.unexpectedError;
      state.isLoading = false;
      state.isError = true;
    },

    //Login
    [fetchUserLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserLogin.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const { message } = action.payload;

      state.message = message;
      state.isError = false;
      state.isLoading = false;
    },

    [fetchUserLogin.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const message = action.payload?.message;
      state.message = message
        ? message
        : MESSAGES.unexpectedError;
      state.isLoading = false;
      state.isError = true;
    },
    //Auth
    [fetchUserAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserAuth.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    },

    [fetchUserAuth.rejected.type]: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.message = MESSAGES.authRefused;
    },
  },
});

export default userReducer.reducer;
export const userActions = userReducer.actions;
export const userSlice = userReducer;
