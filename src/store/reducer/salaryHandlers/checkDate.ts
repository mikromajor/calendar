import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";
import { checkMonth, checkYear } from ".";

export const checkDate = (
  state: SalaryInit,
  { usersYear, usersMonth }: PayloadType
) => {
  if (checkMonth(usersMonth)) {
    state.month = usersMonth;
    return true;
  } else if (checkYear(usersYear)) {
    state.year = usersYear;
    return true;
  } else {
    return false;
  }
};
