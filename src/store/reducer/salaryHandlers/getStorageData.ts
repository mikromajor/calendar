import { InitSalaryState } from "../types/salaryTypes";

export const getStorageData = (
  year?: number,
  month?: number
): undefined | InitSalaryState => {
  let key = "salaryForTheDate_",
    storageData;
  key += year && month ? "" + year + month : "";
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      storageData = JSON.parse(item);
    }
  } catch (e) {
    console.log(e);
  }
  return storageData;
};
