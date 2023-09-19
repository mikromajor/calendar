import {
  amountWeekendsAndWeekdays,
  numbersLetsGo,
  determExtraSalary,
  determStandardSalary,
} from ".";
import {
  PayloadType,
  SalaryInit,
} from "../types/salaryTypes";

export const updateSalary = (
  state: SalaryInit,
  payload: PayloadType,
  dateKey: string
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

  numbersLetsGo(salaryRate) &&
    (state.salaryRate = salaryRate);

  premiumRate &&
    premiumRate >= 1 &&
    (state.premiumRate = premiumRate);

  numbersLetsGo(premiumUzn) &&
    (state.premiumUzn = premiumUzn);

  numbersLetsGo(taxRate) && (state.taxRate = taxRate);

  numbersLetsGo(sickLeaveWeekDays) &&
    (state.sickLeaveWeekDays = sickLeaveWeekDays);
  numbersLetsGo(sickLeaveWeekendDays) &&
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

  numbersLetsGo(extraHours_50) &&
    (state.extraHours_50 = extraHours_50);

  numbersLetsGo(extraHours_100) &&
    (state.extraHours_100 = extraHours_100);

  numbersLetsGo(extraHours_120) &&
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
