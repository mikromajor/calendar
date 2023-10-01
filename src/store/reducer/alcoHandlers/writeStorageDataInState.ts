import { StateType } from "../types/alcoTypes";

export const writeStorageDataInState = (
  storageData: StateType,
  state: StateType
) => {
  const {
    totalVodkaPerMonth,
    totalPureAlcoholPerMonth,
    totalVodkaPerYear,
    totalClearAlcoholPerYear,
  } = storageData;

  state.totalVodkaPerMonth = totalVodkaPerMonth;

  state.totalPureAlcoholPerMonth = totalPureAlcoholPerMonth;

  state.totalVodkaPerYear = totalVodkaPerYear;

  state.totalClearAlcoholPerYear = totalClearAlcoholPerYear;
};
