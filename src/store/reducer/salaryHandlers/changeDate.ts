import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";
import { checkMonth, checkYear } from ".";

export const changeDate = (
  state: SalaryInit,
  { year, month }: PayloadType
) => {
  state.month = checkMonth(month)
    ? month
    : new Date().getUTCMonth() + 1;

  state.year = checkYear(year)
    ? year
    : new Date().getFullYear();
};
