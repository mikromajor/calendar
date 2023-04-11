import {
  SalaryInit,
  KeysSalaryInit,
} from "../types/salaryTypes";
import { SALARY_INIT } from "../constants/salaryConstants";

export const getSalaryInit = (state: SalaryInit) => {
  const keys = Object.keys(
    state
  ) as any as KeysSalaryInit[];
  keys.forEach((key) => {
    if (key !== "month" && key !== "year") {
      state[key] = SALARY_INIT[key];
    }
  });
};
