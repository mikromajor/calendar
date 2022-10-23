import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { initialAlcoState, PayloadType } from "./alcoTypes";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: initialAlcoState,
  reducers: {
    additionVolume: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      state.liters++;
    },
    subtractionVolume: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      state.liters--;
    },
    additionPercent: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      state.percent++;
    },
    subtractionPercent: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      state.percent--;
    },
    additionVodka: (state) => {
      const { liters, percent } = state;
      state.totalVodka += liters * percent * 0.024;
    },
    subtractionVodka: (state) => {
      const { liters, percent } = state;
      state.totalVodka -= liters * percent * 0.024;
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
