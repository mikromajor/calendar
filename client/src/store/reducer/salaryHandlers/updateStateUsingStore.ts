import { SalaryInit } from "../../../types/salaryTypes";
import { INIT_SALARY } from "../../../constants/salaryConstants";
import { amountWeekendsAndWeekdays, getKey } from ".";

export const updateStateUsingStore = (
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
          ...INIT_SALARY,
          weekDays: weekdays,
          weekendDays: weekends,
          year: state.year,
          month: state.month,
        };
    Object.assign(state, update);
  } catch (e) {
    console.log(
      "Error caught in updateStateUsingStore ->",
      e
    );
  }
};
