import { ISalaryInit } from "types/salaryTypes";

export const inputsValidation = (
  keyWord: keyof ISalaryInit,
  inputVal: number
) => {
  let res = true;

  switch (keyWord) {
    case "salaryRate":
    case "premiumRate":
    case "premiumUzn":
    case "taxRate":
      res = inputVal < 0 ? false : true;
      break;
    case "extraHours_50":
    case "extraHours_100":
    case "extraHours_120":
      res = inputVal > 160 || inputVal < 0 ? false : true;
      break;
    case "sickLeaveWeekendDays":
      res = inputVal > 8 || inputVal < 0 ? false : true;
      break;
    case "sickLeaveWeekDays":
    case "holidays":
      res = inputVal > 22 || inputVal < 0 ? false : true;
      break;
    case "usedVacation":
      res = inputVal > 30 || inputVal < 0 ? false : true;
      break;
    case "bloodDonation":
      res = inputVal > 2 || inputVal < 0 ? false : true;
      break;
  }
  return res;
};
