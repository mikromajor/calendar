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
    additionVolume: (
      state
      // action: PayloadAction<PayloadType>
    ) => {
      state.liters =
        Math.floor((state.liters + 0.1) * 100) / 100;
    },
    subtractionVolume: (state) => {
      state.liters =
        Math.floor((state.liters - 0.1) * 100) / 100;
    },
    additionPercent: (state) => {
      state.percent =
        Math.floor((state.percent + 0.1) * 100) / 100;
    },
    subtractionPercent: (state) => {
      state.percent =
        Math.floor((state.percent - 0.1) * 100) / 100;
    },
    additionVd: (state, action: PayloadAction<string>) => {
      const item = window.localStorage.getItem(
        action.payload
      );
      const tempStore = (item
        ? JSON.parse(item)
        : state) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      state.month = action.payload;
      state.totalVodka =
        tempStore.totalVodka +
        Math.floor(liters * percent * 2.4) / 100;
      window.localStorage.setItem(
        action.payload,
        JSON.stringify(state)
      );
    },
    subtractionVd: (
      state,
      action: PayloadAction<string>
    ) => {
      const item = window.localStorage.getItem(
        action.payload
      );
      const tempStore = (item
        ? JSON.parse(item)
        : state) as unknown as typeof initialAlcoState;

      const { liters, percent } = state;
      state.month = action.payload;
      state.totalVodka =
        tempStore.totalVodka - liters * percent * 0.024;
      window.localStorage.setItem(
        action.payload,
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
  },
});

export default alcoReducer.reducer;
export const alcoActions = alcoReducer.actions;
