import {
  InitSalaryState,
  PayloadType,
} from "../types/salaryTypes";
import { INIT_SALARY_STATE } from "../constants/salaryConstants";
import { getKey } from "./";

export const getStorageData = ({
  usersYear,
  usersMonth,
}: PayloadType) => {
  const key = getKey(usersYear, usersMonth);
  let isStorage;

  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      isStorage = JSON.parse(
        item
      ) as any as InitSalaryState;
    }
  } catch (e) {
    console.log(e);
  } finally {
    return isStorage;
  }
};
