import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { initialAlcoState, PayloadType } from "./alcoTypes";
import { setDecimal } from "./handler";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: initialAlcoState,
  reducers: {
    setMultipliers: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      state.multiplier = action.payload.multiplier;
    },
    additionVolume: (state) => {
      const { liters, multiplier } = state;
      state.liters = setDecimal(liters + multiplier, 2);
    },
    subtractionVolume: (state) => {
      const { liters, multiplier } = state;
      state.liters = setDecimal(liters - multiplier, 2);
    },
    additionPercent: (state) => {
      const { percent, multiplier } = state;
      state.percent = setDecimal(percent + multiplier, 1);
    },
    subtractionPercent: (state) => {
      const { percent, multiplier } = state;
      state.percent = setDecimal(percent - multiplier, 1);
    },
    additionVd: (state, action: PayloadAction<string>) => {
      const currentMonth = action.payload;
      const item =
        window.localStorage.getItem(currentMonth);

      const { totalVodka } = (item
        ? JSON.parse(item)
        : state) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      state.month = currentMonth;
      state.totalVodka = setDecimal(
        liters * percent * 0.024 + totalVodka,
        2
      );
      window.localStorage.setItem(
        currentMonth,
        JSON.stringify(state)
      );
    },
    subtractionVd: (
      state,
      action: PayloadAction<string>
    ) => {
      const currentMonth = action.payload;
      const item =
        window.localStorage.getItem(currentMonth);

      const { totalVodka } = (item
        ? JSON.parse(item)
        : state) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      state.month = currentMonth;
      state.totalVodka = setDecimal(
        totalVodka - liters * percent * 0.024,
        2
      );
      window.localStorage.setItem(
        currentMonth,
        JSON.stringify(state)
      );
    },
    clearStorageForMonth: (
      state,
      action: PayloadAction<string>
    ) => {
      window.localStorage.removeItem(action.payload);
    },
    clearAllStor: () => {
      window.localStorage.clear();
    },
    showStorageForMonth: (
      state,
      action: PayloadAction<string>
    ) => {
      const currentMonth = action.payload;
      const item =
        window.localStorage.getItem(currentMonth);
      console.log(
        "currentMonth",
        currentMonth,
        "item",
        item
      );

      if (item) {
        const { totalVodka, month } = JSON.parse(
          item
        ) as unknown as typeof initialAlcoState;
        state.totalVodka = totalVodka;
        state.month = month;
      } else {
        state.month = "0";
      }
      // state = (item
      //   ? JSON.parse(item)
      //   : {
      //       ...initialAlcoState,
      //       month: "0",
      //     }) as unknown as typeof initialAlcoState;
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
