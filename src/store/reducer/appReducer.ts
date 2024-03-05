import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_APP_STATE } from "../../constants/appConstants";
import { Language } from "../../types/alcoTypes";

export const appReducer = createSlice({
  name: "appState",
  initialState: INIT_APP_STATE,
  reducers: {
    changeAppLanguage: (
      state,
      action: PayloadAction<Language>
    ) => {
      state.currentLang = action.payload;
    },
  },
});

export default appReducer.reducer;
export const appActions = appReducer.actions;
