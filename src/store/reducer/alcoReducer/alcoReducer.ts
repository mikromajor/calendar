import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { initialAlcoState, PayloadType } from "./alcoTypes";

export const alcoReducer = createSlice({
  name: "alcoState",
  initialState: initialAlcoState,
  reducers: {
    addDrink: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const liters = Number(action.payload.liters);
      const percent = Number(action.payload.percentAlc);

      state.totalVodka += liters * percent * 0.026;
    },
    subtractDrink: (
      state,
      action: PayloadAction<PayloadType>
    ) => {
      const liters = Number(action.payload.liters);
      const percent = Number(action.payload.percentAlc);

      state.totalVodka -= liters * percent * 0.026;
    },
  },
});

export default alcoReducer.reducer;
export const { addDrink, subtractDrink } =
  alcoReducer.actions;
