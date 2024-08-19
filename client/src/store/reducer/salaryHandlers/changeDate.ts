import {
  IPayload,
  ISalaryInit,
} from "../../../types/salaryTypes";
import { checkMonth, isNum } from ".";

export const changeDate = (
  state: ISalaryInit,
  { year, month }: IPayload
) => {
  checkMonth(month) && (state.month = month);
  isNum(year) && (state.year = year);
};
