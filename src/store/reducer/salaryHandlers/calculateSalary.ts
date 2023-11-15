import {
  amountWeekendsAndWeekdays,
  isNumberMoreZero,
  determExtraSalary,
  determStandardSalary,
} from ".";
import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";

export const calculateSalary = (
  state: SalaryInit,
  payload: PayloadType
) => {
  const {
    salaryRate,
    premiumUzn,
    premiumRate,
    taxRate,
    extraHours_50,
    extraHours_100,
    extraHours_120,
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

  isNumberMoreZero(salaryRate) &&
    (state.salaryRate = salaryRate);

  premiumRate &&
    premiumRate >= 1 &&
    (state.premiumRate = premiumRate);

  isNumberMoreZero(premiumUzn) &&
    (state.premiumUzn = premiumUzn);

  isNumberMoreZero(taxRate) && (state.taxRate = taxRate);

  isNumberMoreZero(sickLeaveWeekDays) &&
    (state.sickLeaveWeekDays = sickLeaveWeekDays);
  isNumberMoreZero(sickLeaveWeekendDays) &&
    (state.sickLeaveWeekendDays = sickLeaveWeekendDays);

  isNumberMoreZero(usedVacation) &&
    (state.usedVacation = usedVacation);
  isNumberMoreZero(bloodDonation) &&
    (state.bloodDonation = bloodDonation);
  isNumberMoreZero(holidays) && (state.holidays = holidays);

  state.weekDays =
    weekdays -
    state.sickLeaveWeekDays -
    state.holidays -
    state.usedVacation -
    state.bloodDonation;

  state.weekendDays = weekends;

  isNumberMoreZero(extraHours_50) &&
    (state.extraHours_50 = extraHours_50);

  isNumberMoreZero(extraHours_100) &&
    (state.extraHours_100 = extraHours_100);

  isNumberMoreZero(extraHours_120) &&
    (state.extraHours_120 = extraHours_120);

  state.nettoPerHours =
    state.salaryRate * state.taxRate * state.premiumRate;

  state.standardWorkHours = state.weekDays * 8;

  state.standardSalary = determStandardSalary(state);

  state.extraSalary = determExtraSalary(state);

  state.totalSalary =
    state.standardSalary + state.extraSalary;

  //  npm rebuild node-sass
};
