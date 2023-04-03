import { InitSalaryState } from "../types/salaryTypes";
import { checkYearAndMonth, getKey } from "./";

export const saveStateInStorage = (
  state: InitSalaryState
) => {
  const { year, month } = state;
  if (checkYearAndMonth(year, month)) {
    const key = getKey(year, month);
    window.localStorage.setItem(key, JSON.stringify(state));
  }
};
