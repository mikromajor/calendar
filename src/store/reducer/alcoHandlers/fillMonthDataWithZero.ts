import { StateType } from "../../reducer/types/alcoTypes";

export const fillMonthDataWithZeros = (
  state: StateType
) => {
  state.totalVodkaPerMonth = 0;
  state.totalPureAlcoholPerMonth = 0;
};
