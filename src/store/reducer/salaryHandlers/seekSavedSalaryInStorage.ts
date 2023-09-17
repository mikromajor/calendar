import { SalaryInit } from "../types/salaryTypes";
import {
  SALARY_KEYS,
  SALARY_INIT,
} from "../constants/salaryConstants";
import { amountWeekendsAndWeekdays } from "./amountWeekendsAndWeekdays";

export const seekSavedSalaryInStorage = (
  state: SalaryInit,
  dateKey: string
) => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const { weekends, weekdays } = amountWeekendsAndWeekdays(
    state.year,
    state.month
  );

  try {
    const item = window.localStorage.getItem(dateKey);

    const update = !!item
      ? (JSON.parse(item) as any as SalaryInit)
      : {
          ...SALARY_INIT,
          weekDays: weekdays,
          weekendDays: weekends,
        };

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
