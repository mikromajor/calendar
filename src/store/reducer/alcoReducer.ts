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
  calcDayData,
  calcMonthData,
} from "./alcoHandlers";
import { Language } from "../../types/alcoTypes";

const store = tryStorageData(
  INIT_ALCO_STATE.currentDate.year
);

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!store ? store : INIT_ALCO_STATE,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<Language>
    ) => {
      state.currentLang = action.payload;
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
          currentLang: state.currentLang,
          currentDate: {
            ...state.currentDate,
            year,
          },
        }
      );
    },
    //TODO: fixing
    calculating: (
      state,
      action: PayloadAction<string[]>
    ) => {
      const [vol, per] = action.payload.map((d) =>
        Number(d)
      );
      const { day, month, year } = state.currentDate;

      if (vol && per) {
        const vodka = setDecimal(
          (vol * per * 2.5) / 100,
          0
        );
        // setDecimal(state.sumEthanolPerMonth + ethanol, 0);
        state.yearData.totalVodka += vodka;
        calcMonthData(state, { additiveVodka: vodka });
        calcDayData(state, { additiveVodka: vodka });

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
      const monthData = state.yearData.months[currentMonth];
      state.yearData.totalBill -= monthData.totalBill;
      state.yearData.totalVodka -= monthData.totalVodka;
      state.yearData.months[currentMonth] = {
        ...INIT_MONTH,
      };
    },
    clearAllStor: () => {
      window.localStorage.clear();
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
