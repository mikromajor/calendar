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
  fillMonthDataWithZeros,
  fillStateWithZeros,
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

      changeStateUsingStor(state, fillMonthDataWithZeros);
    },
    changeYear: (state, action: PayloadAction<string>) => {
      const year = action.payload;
      !!year &&
        Number(year) > 2020 &&
        Number(year) < 2050 &&
        (state.year = year);

      changeStateUsingStor(state, fillStateWithZeros);
    },

    calculating: (state) => {
      const { volumeDrunks, percentDrunk } = state;
      let vodka = 0,
        ethanol = 0;

      if (volumeDrunks && percentDrunk) {
        ethanol =
          setDecimal(
            ((volumeDrunks * percentDrunk) / 100) * 100,
            2
          ) / 100;

        vodka = setDecimal(ethanol * 240, 2) / 100;

        state.totalPureAlcoholPerMonth += ethanol;
        state.totalVodkaPerMonth += vodka;

        state.totalVodkaPerYear += vodka;
        state.totalEthanolPerYear += ethanol;
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
