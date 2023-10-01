import { StateType } from "../types/alcoTypes";

export const writeStorageDataInState = (
  storageData: StateType,
  state: StateType
) => {
  const { totalVodkaPerMonth, totalEthanolPerMonth } =
    storageData;

  state.totalVodkaPerMonth = totalVodkaPerMonth;

  state.totalEthanolPerMonth = totalEthanolPerMonth;
};
