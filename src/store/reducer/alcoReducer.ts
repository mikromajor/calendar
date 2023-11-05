import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  INIT_ALCO_STATE,
  INIT_MONTH_DATA,
} from "./constants/alcoConstants";
import {
  tryStorageData,
  saveStateInStorage,
  setDecimal,
  createKey,
} from "./alcoHandlers";
import { LgsName } from "./types/alcoTypes";

const store = tryStorageData("2023");

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: !!store ? store : INIT_ALCO_STATE,
  reducers: {
    changeLanguage: (
      state,
      action: PayloadAction<LgsName>
    ) => {
      state.currentLang = action.payload;
    },
    changeVolumeDrunk: (
      state,
      action: PayloadAction<string>
    ) => {
      const volume = action.payload;

      state.volumeDrunks = Number(volume);
    },
    changePercentDrunk: (
      state,
      action: PayloadAction<string>
    ) => {
      const percent = action.payload;
      state.percentDrunk = Number(percent);
    },
    changeMonth: (state, action: PayloadAction<string>) => {
      const month = action.payload;

      const index = state.monthsData.findIndex(
        (obj) => obj.month === month
      );
      if (index > -1) {
        state.currentIndex = index;
        state.sumEthanolPerMonth =
          state.monthsData[index].sumEthanolPerMonth;
        state.sumVodkaPerMonth =
          state.monthsData[index].sumVodkaPerMonth;
        state.currentMonth = month;
      } else {
        state.currentIndex = state.monthsData.length;
        state.monthsData.push({
          ...INIT_MONTH_DATA,
          month: month,
        });
      }
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;

      const isStoreData = tryStorageData(year);

      Object.assign(
        state,
        !!isStoreData ? isStoreData : INIT_ALCO_STATE
      );
      state.currentYear = year;
    },

    calculating: (state) => {
      const { volumeDrunks, percentDrunk } = state;
      let ethanol = 0;

      if (volumeDrunks && percentDrunk) {
        ethanol = setDecimal(
          (volumeDrunks * percentDrunk) / 100,
          2
        );

        state.sumEthanolPerMonth = setDecimal(
          state.sumEthanolPerMonth + ethanol,
          2
        );

        state.sumEthanolPerYear = setDecimal(
          ethanol + state.sumEthanolPerYear,
          2
        );
        state.sumVodkaPerMonth = setDecimal(
          state.sumEthanolPerMonth * 2.4,
          2
        );

        state.sumVodkaPerYear = setDecimal(
          state.sumEthanolPerYear * 2.4,
          2
        );

        state.monthsData[state.currentIndex] = {
          month: state.currentMonth,
          sumEthanolPerMonth: state.sumEthanolPerMonth,
          sumVodkaPerMonth: state.sumVodkaPerMonth,
        };
      }
      saveStateInStorage(state);
    },
    clearStorageForYear: (state) => {
      const key = createKey(state.currentYear);
      window.localStorage.removeItem(key);
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
