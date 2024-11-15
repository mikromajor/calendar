import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "constants/alcoConstants";
import {
  getAlcoYear,
  addNewDoseToDB,
} from "./http/alcoActions";
import { IServerRes } from "types/userTypes";
import { AlcoState } from "types/alcoTypes";

export const alcoSlice = createSlice({
  name: "alcoState",
  initialState: INIT_ALCO_STATE,
  reducers: {
    //synchronous change date in calendar
    changeDay: (state, action: PayloadAction<string>) => {
      state.currentDate.day = action.payload;
    },

    changeMonth: (state, action: PayloadAction<string>) => {
      state.currentDate.month = action.payload;
    },
    changeYear: (state, action: PayloadAction<string>) => {
      // Object.assign(state, action.payload);
      state.currentDate.year = action.payload;
    },
    updateAlcoSliceAfterLogin: (
      state,
      action: PayloadAction<AlcoState>
    ) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: {
    // getAlcoYear
    // [getAlcoYear.pending.type]: (state) => {
    //   state.service.isLoading = true;
    //   state.service.isError = false;
    //   state.service.message = "";
    // },
    [getAlcoYear.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      let alcoState = action.payload?.alcoState;
      alcoState && Object.assign(state, alcoState);
    },
    // [getAlcoYear.rejected.type]: (
    //   state,
    //   action: PayloadAction<IServerRes>
    // ) => {
    //   state.service.message = action.payload.message;
    //   state.service.isLoading = false;
    //   state.service.isError = true;
    // },
    //addNewDose
    // [addNewDoseToDB.pending.type]: (state) => {
    //   state.service.isLoading = true;
    //   state.service.isError = false;
    //   state.service.message = "";
    // },
    [addNewDoseToDB.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      let alcoState = action.payload?.alcoState;
      alcoState && Object.assign(state, alcoState);
    },
    // [addNewDoseToDB.rejected.type]: (
    //   state,
    //   action: PayloadAction<IServerRes>
    // ) => {
    //   state.service.message = action.payload.message;
    //   state.service.isError = true;
    //   state.service.isLoading = false;
    // },
  },
});

export default alcoSlice.reducer;
export const alcoActions = alcoSlice.actions;
