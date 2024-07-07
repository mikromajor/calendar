import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_APP_STATE } from "../../constants/appConstants";
import {
  AppLanguages,
  AppThemes,
} from "../../types/appTypes";

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
  },
});

export default appReducer.reducer;
export const appActions = appReducer.actions;
