import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  INIT_ALCO_STATE,
  INIT_MONTH,
  INIT_ALCO_YEAR,
} from "../../constants/alcoConstants";
import {
  tryStorageData,
  saveStateInStorage,
  setDecimal,
  createKey,
  addVodkaToState,
  minMaxDayValidation,
  minMaxMonthValidation,
} from "./alcoHandlers";
import {
  getAlcoYear,
  addNewDoseToDB,
} from "./http/alcoActions";
import { AlcoState } from "../../types/alcoTypes";
import { IServerRes } from "../../types/userTypes";

// const store = tryStorageData(
//   INIT_ALCO_STATE.currentDate.year
// );

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: INIT_ALCO_STATE,
  reducers: {
    changeDay: (state, action: PayloadAction<string>) => {
      const day = action.payload;
      const { month, year } = state.currentDate;

      state.currentDate.day = minMaxDayValidation(
        day,
        month,
        year
      );
    },

    changeMonth: (state, action: PayloadAction<string>) => {
      let month = minMaxMonthValidation(action.payload);
      const { day, year } = state.currentDate;

      state.currentDate.day = minMaxDayValidation(
        day,
        month,
        year
      );
      state.currentDate.month = month;
    },
    changeYear: (
      state,
      action: PayloadAction<AlcoState>
    ) => {
      // Object.assign(state, action.payload);
      state.currentDate = action.payload.currentDate;
      state.yearData = action.payload.yearData;
      state.service = action.payload.service;
    },

    //TODO change CLEARS func , use DB
    clearYearData: (state) => {
      const key = createKey(state.currentDate.year);
      window.localStorage.removeItem(key);
      state.yearData = { ...INIT_ALCO_YEAR };
    },
    clearMonthData: (state) => {
      const currentMonth = Number(state.currentDate.month);
      //TODO add checking for the existence of a month-object
      if (state.yearData.months?.[currentMonth]) {
        const { totalVodka } =
          state.yearData.months[currentMonth];

        state.yearData.totalVodka -= totalVodka;
        state.yearData.months[currentMonth] = {
          ...INIT_MONTH,
        };
      }
    },
  },
  extraReducers: {
    // getAlcoYear
    [getAlcoYear.pending.type]: (state) => {
      state.service.isLoading = true;
    },
    [getAlcoYear.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      Object.assign(state, action.payload.alcoState);
    },
    [getAlcoYear.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.service.isLoading = false;
      state.service.isError = true;
      state.service.message = action.payload;
    },
    //addNewDose
    [addNewDoseToDB.pending.type]: (state) => {
      state.service.isLoading = true;
    },
    [addNewDoseToDB.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      Object.assign(state, action.payload.alcoState);
    },
    [addNewDoseToDB.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.service.message = action.payload;
      state.service.isError = true;
      state.service.isLoading = false;
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
export const alcoSlice = alcoReducer;
