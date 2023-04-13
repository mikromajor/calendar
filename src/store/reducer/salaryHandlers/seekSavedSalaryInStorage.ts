import { SalaryInit } from "../types/salaryTypes";
import {
  SALARY_KEYS,
  SALARY_INIT,
} from "../constants/salaryConstants";

export const seekSavedSalaryInStorage = (
  state: SalaryInit,
  dateKey: string
) => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.localStorage.getItem(dateKey);

    const update = !!item
      ? (JSON.parse(item) as any as SalaryInit)
      : SALARY_INIT;

    SALARY_KEYS.forEach((key) => {
      if (key !== "month" && key !== "year") {
        state[key] = update[key];
      }
    });
  } catch (e) {
    console.log(
      "Error caught in seekSavedSalaryInStorage ->",
      e
    );
  }
};
