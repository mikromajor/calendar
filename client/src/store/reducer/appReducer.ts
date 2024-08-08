import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { INIT_APP_STATE } from "../../constants/appConstants";
import {
  AppLanguages,
  AppThemes,
  IUser,
} from "../../types/appTypes";
import { IServerRes } from "../../types/appTypes";

import {
  fetchUserAuth,
  fetchUserLogin,
  fetchUserRegistration,
} from "./http/userActions";

export const appReducer = createSlice({
  name: "appState",
  initialState: INIT_APP_STATE,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<AppLanguages>
    ) => {
      state.currentLang = action.payload;
    },
    changeTheme: (
      state,
      action: PayloadAction<AppThemes>
    ) => {
      state.currentTheme = action.payload;
    },
    clearMessage: (state) => {
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
      state.isLoading = false;
      state.isError = false;
      state.user.token = token;
      state.message = message;
    },

    [fetchUserRegistration.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const message = action.payload.message;

      state.message = message ? message : "";
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
      const { token, message, email } = action.payload;

      //TODO delete token from state, he lives in localStor
      state.user.token = token; // temporarily save for testing
      state.message = message;
      state.isError = false;
      state.isLoading = false;
    },

    [fetchUserLogin.rejected.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      const message = action.payload?.message;
      state.message = message ? message : "";
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
      state.message = "Authentication refused";
    },
  },
});

export default appReducer.reducer;
export const appActions = appReducer.actions;
export const appSlice = appReducer;
