import { amountWeekendsAndWeekdays, getKey } from ".";
import { SalaryInit } from "../../../types/salaryTypes";

export const determineVacationPayCoefficient = (
  state: SalaryInit
): number => {
  let vacationPayCoefficientPerDay = 0;

  let pastsDateKey = "";
  let pastsWeekDays = 0;

  for (let i = 1; i <= 3; i++) {
    if (state.month - i > 0) {
      pastsDateKey = getKey(state.year, state.month - i);
      const { weekends } = amountWeekendsAndWeekdays(
        state.year,
        state.month - i
      );
      pastsWeekDays = weekends;
    } else {
      pastsDateKey = getKey(
        state.year - 1,
        state.month + 12 - i
      );
      const { weekends } = amountWeekendsAndWeekdays(
        state.year,
        state.month + 12 - i
      );
      pastsWeekDays = weekends;
    }
    const item = window.localStorage.getItem(pastsDateKey);
    const savedData =
      !!item && (JSON.parse(item) as SalaryInit);

    vacationPayCoefficientPerDay += !!savedData
      ? savedData.totalSalary /
        (savedData.weekDays +
          savedData.sickLeaveWeekDays +
          savedData.usedVacation)
      : 8 * state.nettoPerHours;
  }

  return vacationPayCoefficientPerDay / 3;
};
