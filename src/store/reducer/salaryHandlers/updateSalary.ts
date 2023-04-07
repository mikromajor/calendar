import { PREMIUM_COEFFICIENT } from "../constants/salaryConstants";
import {
  amountWeekendsAndWeekdays,
  getCurrentDate,
  saveSalaryInStorage,
  getKey,
} from ".";
import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";

export const updateSalary = (
  state: SalaryInit,
  payload: PayloadType,
  isKey: string
) => {
  const {
    usersSalaryRate,
    usersPremiumRate,
    usersTaxRate,
    workedExtraHours_50,
    workedExtraHours_100,
    sickLeave,
    usedVacation,
    bloodDonation,
  } = payload;

  if (!isKey) {
    const { currentYear, currentMonth } = getCurrentDate();
    state.year = currentYear;
    state.month = currentMonth;
  }

  const { weekends, weekdays } = amountWeekendsAndWeekdays(
    state.year,
    state.month
  );

  usersSalaryRate && (state.salaryRate = usersSalaryRate);

  usersPremiumRate &&
    (state.premiumRate = usersPremiumRate);

  usersTaxRate && (state.taxRate = usersTaxRate);

  sickLeave && (state.sickLeave += sickLeave);
  usedVacation && (state.usedVacation += usedVacation);
  bloodDonation && (state.bloodDonation += bloodDonation);

  state.weekDays =
    weekdays -
    state.sickLeave -
    state.usedVacation -
    state.bloodDonation;

  state.weekendDays = weekends;

  workedExtraHours_50 &&
    (state.extraHours_50 += workedExtraHours_50);

  workedExtraHours_100 &&
    (state.extraHours_100 += workedExtraHours_100);

  state.nettoPerHours =
    state.salaryRate * state.premiumRate * state.taxRate;

  state.standardWorkHours = state.weekDays * 8;

  state.standardSalary =
    state.standardWorkHours * state.nettoPerHours +
    state.sickLeave * state.salaryRate * 8 * 0.8 +
    state.bloodDonation * state.salaryRate * 8 * 1;
  // TODO: не урахував хворобові в вихідні і відпустку

  state.extraSalary =
    (state.extraHours_50 * PREMIUM_COEFFICIENT.pr_50 +
      state.extraHours_100 * PREMIUM_COEFFICIENT.pr_100) *
    state.nettoPerHours;

  state.totalSalary =
    state.standardSalary + state.extraSalary;

  saveSalaryInStorage(state);
};
