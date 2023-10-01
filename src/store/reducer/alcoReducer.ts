import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "./constants/alcoConstants";
import { Payload } from "./types/alcoTypes";
import {
  giveStorageData,
  setDecimal,
  createKey,
  saveDataInStorage,
  writeStorageDataInState,
  fillStateWithZeros,
  checkUsersDate,
} from "./alcoHandlers";

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
      const { month, year } = checkUsersDate(
        action.payload
      );
      state.month = month;
      state.year = year;

      const storageData = giveStorageData(state);

      storageData
        ? writeStorageDataInState(storageData, state)
        : fillStateWithZeros(state);
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
