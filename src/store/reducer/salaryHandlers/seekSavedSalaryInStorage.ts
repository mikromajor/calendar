import {
  SalaryInit,
  KeysSalaryInit,
} from "../types/salaryTypes";
import { getSalaryInit } from "./";

export const seekSavedSalaryInStorage = (
  state: SalaryInit,
  dateKey: string
) => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.localStorage.getItem(dateKey);
    if (item) {
      const storage = JSON.parse(item) as any as SalaryInit;

      const keys = Object.keys(
        state
      ) as any as KeysSalaryInit[];
      keys.forEach((key) => {
        if (key !== "month" && key !== "year") {
          state[key] = storage[key];
        }
      });
    } else {
      getSalaryInit(state);
    }
  } catch (e) {
    console.log(
      "Error caught in seekSavedSalaryInStorage ->",
      e
    );
  }
};
