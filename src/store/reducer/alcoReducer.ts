import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  INIT_ALCO_STATE,
  INIT_MONTH,
  INIT_YEAR,
} from "../../constants/alcoConstants";
import {
  tryStorageData,
  saveStateInStorage,
  setDecimal,
  createKey,
  addVodkaToState,
  checkMinMaxAmountDaysInCurrentMonth,
} from "./alcoHandlers";
import { AppLanguages } from "../../types/appTypes";

const store = tryStorageData(
  INIT_ALCO_STATE.currentDate.year
);

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!store ? store : INIT_ALCO_STATE,
  reducers: {
    changeDay: (state, action: PayloadAction<string>) => {
      const day = Number(action.payload);
      const { month, year } = state.currentDate;

      if (
        checkMinMaxAmountDaysInCurrentMonth(
          day,
          Number(month),
          Number(year)
        )
      ) {
        // TODO add validation for max amount days in months
        state.currentDate.day = action.payload;
      }
    },

    changeMonth: (state, action: PayloadAction<string>) => {
      const month = Number(action.payload);
      if (month > 0 && month < 13) {
        state.currentDate.month = action.payload;
      }
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
      state.yearData = { ...INIT_YEAR };
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
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
