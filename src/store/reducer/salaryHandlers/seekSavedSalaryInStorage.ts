import {
  SalaryInit,
  KeysSalaryInit,
} from "../types/salaryTypes";

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

      // state = storage

      const keys = Object.keys(
        state
      ) as any as KeysSalaryInit[];

      keys.forEach((key) => {
        state[key] = storage[key];
      });
    }
  } catch (e) {
    console.log(
      "Error caught in seekSavedSalaryInStorage ->",
      e
    );
  }
};
