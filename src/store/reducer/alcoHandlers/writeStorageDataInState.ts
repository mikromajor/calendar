import { StateType } from "../types/alcoTypes";

export const writeStorageDataInState = (
  storageData: StateType,
  state: StateType
) => {
  const {
    totalVodkaPerMonth,
    totalClearAlcoholPerMonth,
    totalVodkaPerYear,
    totalClearAlcoholPerYear,
  } = storageData;

  state.totalVodkaPerMonth = totalVodkaPerMonth;

  state.totalClearAlcoholPerMonth =
    totalClearAlcoholPerMonth;

  state.totalVodkaPerYear = totalVodkaPerYear;

  state.totalClearAlcoholPerYear = totalClearAlcoholPerYear;
};
