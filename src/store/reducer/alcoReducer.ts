import {
  // createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "./constants/alcoConstants";
import { StateType, Payload } from "./types/alcoTypes";
import {
  seekInStorage,
  setDecimal,
  createKey,
  saveDataInStorage,
} from "./alcoHandlers";
import { create } from "domain";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: INIT_ALCO_STATE,
  reducers: {
    changeVolumeDrunk: (
      state,
      action: PayloadAction<Payload>
    ) => {
      const { volume } = action.payload;
      !!volume && (state.volumeDrunks = volume);
    },
    changePercentDrunk: (
      state,
      action: PayloadAction<Payload>
    ) => {
      const { percent } = action.payload;
      !!percent && (state.percentDrunk = percent);
    },
    changeDate: (state, action: PayloadAction<Payload>) => {
      const { month, year } = action.payload;
      !!month && (state.month = month);
      !!year && (state.year = year);
      seekInStorage(state, action);
    },

    calculating: (state) => {
      const { volumeDrunks, percentDrunk } = state;

      if (volumeDrunks && percentDrunk) {
        state.totalClearAlcoholPerMonth += setDecimal(
          (volumeDrunks * percentDrunk) / 100,
          2
        );
        state.totalVodkaPerMonth +=
          state.totalClearAlcoholPerMonth * 2.4;

        state.totalVodkaPerYear += state.totalVodkaPerMonth;
        state.totalClearAlcoholPerYear +=
          state.totalClearAlcoholPerMonth;
      }
      saveDataInStorage(state);
    },
    clearStorageForMonth: (
      state,
      action: PayloadAction<Payload>
    ) => {
      const currentDataKey = createKey(
        state.month,
        state.year
      );

      window.localStorage.removeItem(currentDataKey);
    },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
