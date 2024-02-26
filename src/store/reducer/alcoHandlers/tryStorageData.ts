import { AlcoState } from "../../../types/alcoTypes";
import { createKey } from ".";

export const tryStorageData = (year: string) => {
  const isStoreData = window.localStorage.getItem(
    createKey(year)
  );

  return isStoreData
    ? (JSON.parse(isStoreData) as unknown as AlcoState)
    : null;
};
