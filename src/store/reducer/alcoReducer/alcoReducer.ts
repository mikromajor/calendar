import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./alcoTypes";

const alcoReducer = createSlice({
  name: "alcoState",
  initialState, // only name initialState
  reducers: {
    beer(state, action) {
      const liters = action.payload.liters;
      const percent = action.payload.percentAlc;

      state.beer += liters;
      state.totalVodka += liters * percent * 0.015;
    },
    vine(state, action) {
      const liters = action.payload.liters;
      const percent = action.payload.percentAlc;

      state.vine += liters;
      state.totalVodka += liters * percent * 0.015;
    },
    heightAlc(state, action) {
      const liters = action.payload.liters;
      const percent = action.payload.percentAlc;

      state.heightAlc += liters;
      state.totalVodka += liters * percent * 0.015;
    },
    others(state, action) {
      const liters = action.payload.liters;
      const percent = action.payload.percentAlc;

      state.others += liters;
      state.totalVodka += liters * percent * 0.015;
    },
    testerAsync(state) {
      state.beer += 1;
      state.vine += 1;
      state.heightAlc += 1;
      state.others += 1;
      state.totalVodka += 2;
    },
  },
});

export default alcoReducer.reducer;
export const {
  beer,
  vine,
  heightAlc,
  others,
  testerAsync,
} = alcoReducer.actions;
