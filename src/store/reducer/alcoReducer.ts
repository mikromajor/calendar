import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { initialAlcoState, PayloadType } from "./alcoTypes";

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
    additionVolume: (
      state
      // action: PayloadAction<PayloadType>
    ) => {
      state.liters =
        Math.floor((state.liters + state.multiplier) * 10) /
        10;
    },
    subtractionVolume: (state) => {
      state.liters =
        Math.floor((state.liters - state.multiplier) * 10) /
        10;
    },
    additionPercent: (state) => {
      state.percent =
        Math.floor(
          (state.percent + state.multiplier) * 10
        ) / 10;
    },
    subtractionPercent: (state) => {
      state.percent =
        Math.floor(
          (state.percent - state.multiplier) * 10
        ) / 10;
    },
    //TODO FIX additionVd subtractionVd
    additionVd: (state, action: PayloadAction<string>) => {
      const item = window.localStorage.getItem(
        action.payload
      );
      const currentMonth = action.payload;

      const tempStore = (item
        ? JSON.parse(item)
        : {
            ...state,
          }) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      tempStore.month = currentMonth;
      tempStore.totalVodka =
        Math.floor(
          tempStore.totalVodka + liters * percent * 2.4
        ) / 100;
      window.localStorage.setItem(
        currentMonth,
        JSON.stringify(tempStore)
      );
    },
    subtractionVd: (
      state,
      action: PayloadAction<string>
    ) => {
      const item = window.localStorage.getItem(
        action.payload
      );
      const currentMonth = action.payload;

      const tempStore = (item
        ? JSON.parse(item)
        : {
            ...state,
          }) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      tempStore.month = currentMonth;
      tempStore.totalVodka =
        Math.floor(
          tempStore.totalVodka - liters * percent * 2.4
        ) / 100;
      window.localStorage.setItem(
        currentMonth,
        JSON.stringify(tempStore)
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
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
