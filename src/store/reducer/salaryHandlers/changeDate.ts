import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";
import { checkMonth, checkYear } from ".";

export const changeDate = (
  state: SalaryInit,
  { year, month }: PayloadType
) => {
  if (checkMonth(month)) {
    state.month = month;
  }
  if (checkYear(year)) {
    state.year = year;
  }
};
