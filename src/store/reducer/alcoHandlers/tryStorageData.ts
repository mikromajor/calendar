import { AlcoState } from "../types/alcoTypes";
import { createKey } from ".";

export const tryStorageData = (year: string) => {
  const key = createKey(year);

  const isStoreData = window.localStorage.getItem(key);

  return isStoreData
    ? (JSON.parse(isStoreData) as unknown as AlcoState)
    : null;
};
