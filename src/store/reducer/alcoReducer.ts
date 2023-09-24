import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INIT_ALCO_STATE } from "./constants";
import { InitialAlcoState, PayloadType } from "./alcoTypes";
import { setDecimal } from "./handler";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: INIT_ALCO_STATE,
  reducers: {
    changeVolumeDrunk: () => {},
    changePercentDrunk: () => {},

    calculating: (state) => {
      const { volumeDrunks, percentDrunks } = state;
      // додати перевірку і пропуск 0

      if (volumeDrunks && percentDrunks) {
        state.totalClearAlcoholPerMonth += setDecimal(
          (volumeDrunks * percentDrunks) / 100,
          2
        );
        state.totalVodkaPerMonth +=
          (state.totalClearAlcoholPerMonth * 2) / 3;

        state.totalVodkaPerYear += state.totalVodkaPerMonth;
        state.totalClearAlcoholPerYear +=
          state.totalClearAlcoholPerMonth;

        state.totalClearAlcoholPerMonth += setDecimal(
          (volumeDrunks * percentDrunks) / 100,
          2
        );
        state.totalVodkaPerMonth +=
          (state.totalClearAlcoholPerMonth * 2) / 3;

        state.totalVodkaPerYear += state.totalVodkaPerMonth;
        state.totalClearAlcoholPerYear +=
          state.totalClearAlcoholPerMonth;

        // додати чи змінити запис в стореж
      }
    },

    //   additionVd: (state, action: PayloadAction<string>) => {
    //   const currentMonth = action.payload;
    //   const item =
    //     window.localStorage.getItem(currentMonth);

    //   const { totalVodka } = (item
    //     ? JSON.parse(item)
    //     : state) as unknown as InitialAlcoState;

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
    //     : state) as unknown as InitialAlcoState;

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
    showStorageForMonth: (
      state,
      action: PayloadAction<string>
    ) => {
      const getDataForMonth = action.payload;
      const isStoreData =
        window.localStorage.getItem(getDataForMonth);
      if (isStoreData) {
        const {
          totalVodkaPerMonth,
          totalClearAlcoholPerMonth,
          totalVodkaPerYear,
          totalClearAlcoholPerYear,
          month,
        } = JSON.parse(
          isStoreData
        ) as unknown as InitialAlcoState;
        state.totalVodkaPerMonth = totalVodkaPerMonth;
        state.totalClearAlcoholPerMonth =
          totalClearAlcoholPerMonth;
        state.totalVodkaPerYear = totalVodkaPerYear;
        state.totalClearAlcoholPerYear =
          totalClearAlcoholPerYear;
        state.month = month;
      } else {
        state.totalVodkaPerMonth = 0;
        state.totalClearAlcoholPerMonth = 0;
        state.month = getDataForMonth;
      }
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
