import {
  InitSalaryState,
  KeysInitSalaryState,
  PayloadType,
} from "../types/salaryTypes";
import { getKey } from "./";

export const getStorageData = (
  state: InitSalaryState,
  { usersYear, usersMonth }: PayloadType
) => {
  const key = getKey(usersYear, usersMonth);

  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      const storage = JSON.parse(
        item
      ) as any as InitSalaryState;
      const keys = Object.keys(
        state
      ) as any as KeysInitSalaryState[];

      keys.forEach((key) => {
        state[key] = storage[key];
      });

      return true;
    }
  } catch (e) {
    console.log("Error caught in getStorageData ->", e);
  }
};
