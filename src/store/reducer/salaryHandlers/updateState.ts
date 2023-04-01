import { INIT_SALARY_STATE } from "../constants/salaryConstants";
import { amountWeekendsAndWeekdays, getKey } from "./";
import { PayloadType } from "../types/salaryTypes";

export const updateState = (payload: PayloadType) => {
  const {
    usersMonth,
    usersYear,
    usersSalaryRate,
    usersPremiumRate,
    usersTaxRate,
    workedExtraHours_50,
    workedExtraHours_100,
  } = payload;

  const state = INIT_SALARY_STATE;

  const { weekends, weekdays, year, month } =
    amountWeekendsAndWeekdays(usersYear, usersMonth);

  state.year = year;
  state.month = month;

  usersSalaryRate && (state.salaryRate = usersSalaryRate);

  usersPremiumRate &&
    (state.premiumRate = usersPremiumRate);
  usersTaxRate && (state.taxRate = usersTaxRate);

  state.weekDays = weekdays;
  state.weekendDays = weekends;

  workedExtraHours_50 &&
    (state.extraHours_50 += workedExtraHours_50);

  workedExtraHours_100 &&
    (state.extraHours_100 += workedExtraHours_100);

  const key = getKey(usersYear, usersMonth);

  window.localStorage.setItem(key, JSON.stringify(state));

  return state;
};
