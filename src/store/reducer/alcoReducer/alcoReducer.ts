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
      state
      // action: PayloadAction<PayloadType>
    ) => {
      state.liters += 0.1;
    },
    subtractionVolume: (state) => {
      state.liters -= 0.1;
    },
    additionPercent: (state) => {
      state.percent += 0.1;
    },
    subtractionPercent: (state) => {
      state.percent -= 0.1;
    },
    additionVodka: (state) => {
      const item = window.localStorage.getItem("vodka");
      const tempStore = (item
        ? JSON.parse(item)
        : state) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      state.totalVodka =
        tempStore.totalVodka + liters * percent * 0.024;
      // state.totalVodka += liters * percent * 0.024;
      window.localStorage.setItem(
        "vodka",
        JSON.stringify(state)
      );
    },
    subtractionVodka: (state) => {
      const item = window.localStorage.getItem("vodka");
      const tempStore = (item
        ? JSON.parse(item)
        : state) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      state.totalVodka =
        tempStore.totalVodka - liters * percent * 0.024;
      // state.totalVodka += liters * percent * 0.024;
      window.localStorage.setItem(
        "vodka",
        JSON.stringify(state)
      );
    },
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
