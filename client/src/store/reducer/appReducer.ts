import {
  createSlice,
  PayloadAction,
  Dispatch,
} from "@reduxjs/toolkit";
import { INIT_APP_STATE } from "../../constants/appConstants";
import {
  AppLanguages,
  AppThemes,
  IUser,
} from "../../types/appTypes";
import {
  fetchUserAuth,
  fetchUserLogin,
  fetchUserRegistration,
} from "./http/userActions";
import { AxiosError } from "axios";

interface RegAction extends IUser {
  message: string;
}

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
      action: PayloadAction<RegAction>
    ) => {
      const { token, message } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.user.token = token;
      state.message = message;
    },

    [fetchUserRegistration.rejected.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      const message = action.payload?.message;

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
      action: PayloadAction<IUser>
    ) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },

    [fetchUserLogin.rejected.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.isLoading = false;
      state.isError = true;
      const message = action.payload.message;
      message && (state.message = message);
    },
    //Auth
    [fetchUserAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUserAuth.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },

    [fetchUserAuth.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Authentication refused";
    },
  },
});

export default appReducer.reducer;
export const appActions = appReducer.actions;
export const appSlice = appReducer;
