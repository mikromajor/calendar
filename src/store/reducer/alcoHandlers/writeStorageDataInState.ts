import { StateType } from "../types/alcoTypes";

export const writeStorageDataInState = (
  storageData: StateType,
  state: StateType
) => {
  const { totalVodkaPerMonth, totalPureAlcoholPerMonth } =
    storageData;

  state.totalVodkaPerMonth = totalVodkaPerMonth;

  state.totalPureAlcoholPerMonth = totalPureAlcoholPerMonth;
};
