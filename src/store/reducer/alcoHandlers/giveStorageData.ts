import { StateType } from "../types/alcoTypes";
import { createKey } from ".";

export const giveStorageData = (state: StateType) => {
  const key = createKey(state.month, state.year);

  const isStoreData = window.localStorage.getItem(key);

  return isStoreData
    ? (JSON.parse(isStoreData) as unknown as StateType)
    : null;
};
