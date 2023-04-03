import {
  InitSalaryState,
  KeysInitSalaryState,
  PayloadType,
} from "../types/salaryTypes";
import { checkYearAndMonth, getKey } from ".";

export const seekSavedStateInStorage = (
  state: InitSalaryState,
  { usersYear, usersMonth }: PayloadType
): string | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  // TODO change checkYearAndMonth. Need check one parameter year or month and another get from state

  if (checkYearAndMonth(usersYear, usersMonth)) {
    const key = getKey(usersYear, usersMonth);

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

        return key;
      }
    } catch (e) {
      console.log(
        "Error caught in seekSavedStateInStorage ->",
        e
      );
    }
  }
};
