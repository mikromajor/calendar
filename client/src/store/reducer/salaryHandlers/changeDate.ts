import {
  IPayload,
  SalaryInit,
} from "../../../types/salaryTypes";
import { checkMonth, isNum } from ".";

export const changeDate = (
  state: SalaryInit,
  { year, month }: IPayload
) => {
  checkMonth(month) && (state.month = month);
  isNum(year) && (state.year = year);
};
