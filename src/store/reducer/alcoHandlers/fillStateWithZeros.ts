import { StateType } from "../types/alcoTypes";

export const fillStateWithZeros = (state: StateType) => {
  state.totalVodkaPerMonth = 0;
  state.totalEthanolPerMonth = 0;
  state.totalVodkaPerYear = 0;
  state.totalEthanolPerYear = 0;
};
