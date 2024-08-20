import { ISalaryInit } from "../../../types/salaryTypes";
import { getKey } from "./getKey";

export const saveSalaryInStorage = (state: ISalaryInit) =>
  window.localStorage.setItem(
    getKey(state.year, state.month),
    JSON.stringify(state)
  );
