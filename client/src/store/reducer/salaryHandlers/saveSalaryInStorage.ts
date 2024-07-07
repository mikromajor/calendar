import { SalaryInit } from "../../../types/salaryTypes";
import { getKey } from "./getKey";

export const saveSalaryInStorage = (state: SalaryInit) =>
  window.localStorage.setItem(
    getKey(state.year, state.month),
    JSON.stringify(state)
  );
