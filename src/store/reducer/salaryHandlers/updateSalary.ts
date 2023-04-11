import {
  amountWeekendsAndWeekdays,
  numbersLetsGo,
} from ".";
import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";
import { PREMIUM_COEFFICIENT } from "../constants/salaryConstants";

export const updateSalary = (
  state: SalaryInit,
  payload: PayloadType,
  dateKey: string
) => {
  const {
    salaryRate,
    premiumRate,
    taxRate,
    extraHours_50,
    extraHours_100,
    holidays,
    sickLeaveWeekDays,
    sickLeaveWeekendDays,
    usedVacation,
    bloodDonation,
  } = payload;

  const { weekends, weekdays } = amountWeekendsAndWeekdays(
    state.year,
    state.month
  );

  salaryRate && (state.salaryRate = salaryRate);

  premiumRate && (state.premiumRate = premiumRate);

  taxRate && (state.taxRate = taxRate);

  sickLeaveWeekDays &&
    (state.sickLeaveWeekDays = sickLeaveWeekDays);
  sickLeaveWeekendDays &&
    (state.sickLeaveWeekendDays = sickLeaveWeekendDays);

  numbersLetsGo(usedVacation) &&
    (state.usedVacation = usedVacation);
  numbersLetsGo(bloodDonation) &&
    (state.bloodDonation = bloodDonation);
  numbersLetsGo(holidays) && (state.holidays = holidays);

  state.weekDays =
    weekdays -
    state.sickLeaveWeekDays -
    state.holidays -
    state.usedVacation -
    state.bloodDonation;

  state.weekendDays = weekends;

  extraHours_50 && (state.extraHours_50 = extraHours_50);

  extraHours_100 && (state.extraHours_100 = extraHours_100);
  state.nettoPerHours =
    state.salaryRate * state.premiumRate * state.taxRate;
  state.standardWorkHours = state.weekDays * 8;
  state.standardSalary = Math.round(
    (state.standardWorkHours + state.usedVacation) *
      state.nettoPerHours +
      (state.sickLeaveWeekDays +
        state.sickLeaveWeekendDays) *
        state.salaryRate *
        8 *
        0.8 +
      state.bloodDonation * state.salaryRate * 8 * 1
  );
  state.extraSalary = Math.round(
    (state.extraHours_50 * PREMIUM_COEFFICIENT.pr_50 +
      state.extraHours_100 * PREMIUM_COEFFICIENT.pr_100) *
      state.nettoPerHours
  );

  state.totalSalary =
    state.standardSalary + state.extraSalary;

  // TODO:  рахував  відпустку не як середнє за 3 місяці а як звиклі дні з премією
};
