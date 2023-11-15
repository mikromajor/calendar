import {
  SalaryInit,
  KeysSalaryInit,
} from "../types/salaryTypes";
import { SALARY_INIT } from "../constants/salaryConstants";
import { amountWeekendsAndWeekdays, getKey } from "./";

export const seekSavedSalaryInStorage = (
  state: SalaryInit
) => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const { weekends, weekdays } = amountWeekendsAndWeekdays(
    state.year,
    state.month
  );

  const dateKey = getKey(state.year, state.month);

  try {
    const item = window.localStorage.getItem(dateKey);

    const update = !!item
      ? (JSON.parse(item) as SalaryInit)
      : {
          ...SALARY_INIT,
          weekDays: weekdays,
          weekendDays: weekends,
          year: state.year,
          month: state.month,
        };

    Object.assign(state, update);
  } catch (e) {
    console.log(
      "Error caught in seekSavedSalaryInStorage ->",
      e
    );
  }
};
