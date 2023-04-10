import {
  SalaryInit,
  KeysSalaryInit,
} from "../types/salaryTypes";

export const seekSavedSalaryInStorage = (
  state: SalaryInit,
  dateKey: string
) => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const item = window.localStorage.getItem(dateKey);
    if (item) {
      const storage = JSON.parse(item) as any as SalaryInit;

      // const keys = Object.keys(
      //   state
      // ) as any as KeysSalaryInit[];
      // /* eslint-disable */
      // keys.forEach((key) => {
      //   if (typeof state[key] !== "function") {
      //     // state[key] = storage[key];
      //   }
      // });
      // /* eslint-enable */
      state.salaryRate = storage.salaryRate;
      state.premiumRate = storage.premiumRate;
      state.taxRate = storage.taxRate;
      state.weekDays = storage.weekDays;
      state.weekendDays = storage.weekendDays;
      state.extraHours_50 = storage.extraHours_50;
      state.extraHours_100 = storage.extraHours_100;
      state.sickLeaveWeekDays = storage.sickLeaveWeekDays;
      state.sickLeaveWeekendDays =
        storage.sickLeaveWeekendDays;
      state.holidays = storage.holidays;
      state.usedVacation = storage.usedVacation;
      state.bloodDonation = storage.bloodDonation;
    }
  } catch (e) {
    console.log(
      "Error caught in seekSavedSalaryInStorage ->",
      e
    );
  }
};
