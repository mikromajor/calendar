import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";
import { checkMonth, checkYear } from ".";

export const changeDate = (
  state: SalaryInit,
  { usersYear, usersMonth }: PayloadType
) => {
  if (checkMonth(usersMonth)) {
    state.month = usersMonth;
  }
  if (checkYear(usersYear)) {
    state.year = usersYear;
  }
};
