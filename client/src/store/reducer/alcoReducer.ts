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
import { fetchAlcoYear } from "./http/alcoActions";
import { AlcoYear } from "../../types/alcoTypes";
import { IServerRes } from "../../types/appTypes";

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
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      const isStoreData = tryStorageData(year);

      Object.assign(
        state,
        !!isStoreData ? isStoreData : INIT_ALCO_STATE,
        {
          currentDate: {
            ...state.currentDate,
            year,
          },
        }
      );
    },

    calculating: (
      state,
      action: PayloadAction<string[]>
    ) => {
      const [vol, per] = action.payload.map((d) =>
        Number(d)
      );

      if (vol && per) {
        const vodka = setDecimal(
          (vol * per * 2.5) / 100,
          0
        );

        addVodkaToState(state, vodka);

        saveStateInStorage(state);
      }
    },
    clearYearData: (state) => {
      const key = createKey(state.currentDate.year);
      window.localStorage.removeItem(key);
      state.yearData = { ...INIT_ALCO_YEAR };
    },
    clearMonthData: (state) => {
      const currentMonth = Number(state.currentDate.month);
      //TODO add checking for the existence of a month-object
      if (state?.yearData?.months?.[currentMonth]) {
        const monthData =
          state?.yearData?.months?.[currentMonth];
        state.yearData.totalBill -= monthData.totalBill;
        state.yearData.totalVodka -= monthData.totalVodka;
        state.yearData.months[currentMonth] = {
          ...INIT_MONTH,
        };
      }
    },
    clearAllStor: () => {
      window.localStorage.clear();
    },
    //---handle server response
    changeAlcoYear: (
      state,
      action: PayloadAction<AlcoYear | null>
    ) => {
      const alcoYear = action.payload;
      state.yearData = !!alcoYear
        ? alcoYear
        : INIT_ALCO_STATE.yearData;
    },
  },
  extraReducers: {
    [fetchAlcoYear.pending.type]: (state) => {
      // state.isLoading = true; // TODO create alcoState spinner
    },
    [fetchAlcoYear.fulfilled.type]: (
      state,
      action: PayloadAction<IServerRes>
    ) => {
      state = action.payload.alcoState;
      // state.isError = false;
      // state.message = "";
      // state.isLoading = false; // TODO create alcoState spinner
    },
    [fetchAlcoYear.rejected.type]: (state) => {
      // state.isError = true;
      // state.message = "Error. Can't fetch server data";
      // state.isLoading = false;// TODO create alcoState spinner
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
export const alcoSlice = alcoReducer;
