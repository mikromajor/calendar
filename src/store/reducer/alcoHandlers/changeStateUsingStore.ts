import { StateType } from "../../reducer/types/alcoTypes";
import {
  giveStorageData,
  writeStorageDataInState,
} from "./.";

export const changeStateUsingStor = (
  state: StateType,
  callback: (state: StateType) => void
) => {
  const storageData = giveStorageData(state);

  storageData
    ? writeStorageDataInState(storageData, state)
    : callback(state);
};
