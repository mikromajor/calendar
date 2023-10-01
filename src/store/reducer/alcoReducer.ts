import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "./constants/alcoConstants";
import {
  setDecimal,
  createKey,
  saveDataInStorage,
  changeStateUsingStor,
} from "./alcoHandlers";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: INIT_ALCO_STATE,
  reducers: {
    changeVolumeDrunk: (
      state,
      action: PayloadAction<string>
    ) => {
      const volume = action.payload;
      !!volume && (state.volumeDrunks = Number(volume));
    },
    changePercentDrunk: (
      state,
      action: PayloadAction<string>
    ) => {
      const percent = action.payload;
      !!percent && (state.percentDrunk = Number(percent));
    },
    changeMonth: (state, action: PayloadAction<string>) => {
      const month = action.payload;
      !!month &&
        Number(month) > 0 &&
        Number(month) < 13 &&
        (state.month = month);

      changeStateUsingStor(state);
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;
      !!year &&
        Number(year) > 2020 &&
        Number(year) < 2050 &&
        (state.year = year);

      changeStateUsingStor(state);
    },

    calculating: (state) => {
      const { volumeDrunks, percentDrunk } = state;

      if (volumeDrunks && percentDrunk) {
        state.totalPureAlcoholPerMonth += setDecimal(
          (volumeDrunks * percentDrunk) / 100,
          2
        );
        state.totalVodkaPerMonth +=
          state.totalPureAlcoholPerMonth * 2.4;

        state.totalVodkaPerYear += state.totalVodkaPerMonth;
        state.totalClearAlcoholPerYear +=
          state.totalPureAlcoholPerMonth;
      }
      saveDataInStorage(state);
    },
    clearStorageForMonth: (state) => {
      const key = createKey(state.month, state.year);

      window.localStorage.removeItem(key);
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
