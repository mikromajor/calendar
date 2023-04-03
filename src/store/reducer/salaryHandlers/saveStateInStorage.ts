import { InitSalaryState } from "../types/salaryTypes";

export const saveStateInStorage = (
  state: InitSalaryState,
  isKey: string
) =>
  window.localStorage.setItem(isKey, JSON.stringify(state));
