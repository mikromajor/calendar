import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { INIT_USER_STATE } from "../../constants/userConstants";
import {
  UserLanguages,
  UserThemes,
} from "../../types/userTypes";

export const userSlice = createSlice({
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
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
