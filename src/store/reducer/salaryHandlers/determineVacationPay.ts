import { amountWeekendsAndWeekdays, getKey } from ".";
import { SalaryInit } from "../types/salaryTypes";

// TODO: check how is it work?
export const determineVacationPay = (
  state: SalaryInit
): number => {
  let average = 0;

  if (state.usedVacation > 0) {
    let dateKey = "";
    let currentWeekDays = 0;
    for (let i = 1; i < 4; i++) {
      if (state.month - i > 0) {
        dateKey = getKey(state.year, state.month - i);
        const { weekends } = amountWeekendsAndWeekdays(
          state.year,
          state.month - i
        );
        currentWeekDays = weekends;
      } else {
        dateKey = getKey(
          state.year - 1,
          state.month + 12 - i
        );
        const { weekends } = amountWeekendsAndWeekdays(
          state.year,
          state.month + 12 - i
        );
        currentWeekDays = weekends;
      }
      const item = window.localStorage.getItem(dateKey);
      const savedData =
        !!item && (JSON.parse(item) as any as SalaryInit);

      average += !!savedData
        ? savedData.totalSalary / savedData.weekDays
        : currentWeekDays * 8 * state.nettoPerHours;
    }
  }
  return average / 3;
};
