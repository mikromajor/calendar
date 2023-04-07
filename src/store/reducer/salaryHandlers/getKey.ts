import { SalaryInit } from "../types/salaryTypes";

export const getKey = (state: SalaryInit) =>
  "salaryForTheYear_" +
  state.year +
  "_Month_" +
  state.month;
