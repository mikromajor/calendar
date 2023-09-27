import {
  // createAsyncThunk,
  createSlice,
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
          (state.totalClearAlcoholPerMonth * 2) / 3;

        state.totalVodkaPerYear += state.totalVodkaPerMonth;
        state.totalClearAlcoholPerYear +=
          state.totalClearAlcoholPerMonth;

        state.totalClearAlcoholPerMonth += setDecimal(
          (volumeDrunks * percentDrunk) / 100,
          2
        );
        state.totalVodkaPerMonth +=
          (state.totalClearAlcoholPerMonth * 2) / 3;

        state.totalVodkaPerYear += state.totalVodkaPerMonth;
        state.totalClearAlcoholPerYear +=
          state.totalClearAlcoholPerMonth;
      }
      saveDataInStorage(state);
    },

    //   additionVd: (state, action: PayloadAction<string>) => {
    //   const currentMonth = action.payload;
    //   const item =
    //     window.localStorage.getItem(currentMonth);

    //   const { totalVodka } = (item
    //     ? JSON.parse(item)
    //     : state) as unknown as StateType;

    //   const { liters, percent } = state;
    //   state.month = currentMonth;
    //   state.totalVodka = setDecimal(
    //     liters * percent * 0.024 + totalVodka,
    //     2
    //   );
    //   window.localStorage.setItem(
    //     currentMonth,
    //     JSON.stringify(state)
    //   );
    // },
    // subtractionVd: (
    //   state,
    //   action: PayloadAction<string>
    // ) => {
    //   const currentMonth = action.payload;
    //   const item =
    //     window.localStorage.getItem(currentMonth);

    //   const { totalVodka } = (item
    //     ? JSON.parse(item)
    //     : state) as unknown as StateType;

    //   const { liters, percent } = state;
    //   state.month = currentMonth;
    //   state.totalVodka = setDecimal(
    //     totalVodka - liters * percent * 0.024,
    //     2
    //   );
    //   window.localStorage.setItem(
    //     currentMonth,
    //     JSON.stringify(state)
    //   );
    // },
    // clearStorageForMonth: (
    //   state,
    //   action: PayloadAction<string>
    // ) => {
    //   window.localStorage.removeItem(action.payload);
    // },
    // clearAllStor: () => {
    //   window.localStorage.clear();
    // },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
