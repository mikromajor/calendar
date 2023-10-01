import { StateType } from "../../reducer/types/alcoTypes";
import {
  giveStorageData,
  writeStorageDataInState,
  fillStateWithZeros,
} from "./.";

export const changeStateUsingStor = (state: StateType) => {
  const storageData = giveStorageData(state);

  storageData
    ? writeStorageDataInState(storageData, state)
    : fillStateWithZeros(state);
};
