import { createSlice } from "@reduxjs/toolkit";

const initAlcoState = {
  beer: 0,
  heightAlc: 0,
  VinE: 0,
  others: 0,
  totalVodka: 0,
};
type InitAlcoState = typeof initAlcoState;

enum KindOfDrunkAlcohol {
  BEER = "BEER",
  HEIGHT_ALC = "HEIGHT_ALC",
  VINE = "VINE",
  OTHERS = "X",
}
const { BEER, HEIGHT_ALC, VINE, OTHERS } =
  KindOfDrunkAlcohol;

type Action = {
  type: KindOfDrunkAlcohol;
  payload: {
    liters: number;
    percentAlc: number;
  };
};

// TODO переписать все на слайсах

const toolkitSlice = createSlice({
  name: "alcoState",
  initialState: {
    beer: 0,
    heightAlc: 0,
    vine: 0,
    others: 0,
    totalVodka: 0,
  },
  reducers: {
    beer(state, action) {
      const liters = action.payload.liters;
      const percent = action.payload.percentAlc;

      state.beer += liters;
      state.totalVodka += liters * percent * 0.015;
    },
  },
});
export default toolkitSlice.reducer;
export const { beer } = toolkitSlice.actions;
