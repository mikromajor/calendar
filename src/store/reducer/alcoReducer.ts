import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "../../constants/alcoConstants";
import {
  tryStorageData,
  saveStateInStorage,
  setDecimal,
  createKey,
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
        state.currentMonth = action.payload;

        if (state.yearData.months[month]) {
          state.yearData =
            state.yearData[month].sumEthanolPerMonth;
          state.sumVodkaPerMonth =
            state.yearData[month].sumVodkaPerMonth;
          state.currentMonth = month + "";
        } else {
          state.sumEthanolPerMonth = 0;
          state.sumVodkaPerMonth = 0;
        }
      }
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      const isStoreData = tryStorageData(year);

      Object.assign(
        state,
        !!isStoreData ? isStoreData : INIT_ALCO_STATE,
        {
          currentYear: year,
          currentLang: state.currentLang,
        }
      );
    },

    calculating: (
      state,
      action: PayloadAction<string[]>
    ) => {
      const [volumeDrank, percent] = action.payload;
      const { currentDay, currentMonth, currentYear } =
        state;
      const vol = Number(volumeDrank);
      const per = Number(percent);
      let ethanol = 0;

      if (vol && per) {
        ethanol = (vol * per) / 100;

        state.yearData[Number(currentMonth)].days[
          Number(currentDay)
        ].sumVodkaPerDay = state.sumEthanolPerMonth =
          setDecimal(state.sumEthanolPerMonth + ethanol, 0);
        state.sumVodkaPerMonth = setDecimal(
          state.sumEthanolPerMonth * 2.5,
          0
        );

        state.yearData[Number(currentMonth)] = {
          month: currentMonth,
          sumEthanolPerMonth: state.sumEthanolPerMonth,
          sumVodkaPerMonth: state.sumVodkaPerMonth,
          days: [], //TODO
        };

        state.sumEthanolPerYear = setDecimal(
          state.yearData.reduce(
            (sum, monthData) =>
              !!monthData
                ? sum + monthData.sumEthanolPerMonth
                : 0,
            0
          ),
          0
        );

        state.sumVodkaPerYear = setDecimal(
          state.sumEthanolPerYear * 2.5,
          0
        );
        saveStateInStorage(state);
      }
    },
    clearStorageForYear: (state) => {
      const key = createKey(state.currentYear);
      window.localStorage.removeItem(key);
      Object.assign(state, INIT_ALCO_STATE, {
        currentYear: state.currentYear,
        currentLang: state.currentLang,
      });
    },
    clearMonthData: (state) => {
      const monthData =
        state.yearData[Number(state.currentMonth)];
      monthData.sumEthanolPerMonth = 0;
      monthData.sumVodkaPerMonth = 0;

      state.sumVodkaPerYear -= state.sumVodkaPerMonth;
      state.sumEthanolPerYear -= state.sumEthanolPerMonth;
      state.sumEthanolPerMonth = 0;
      state.sumVodkaPerMonth = 0;
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
