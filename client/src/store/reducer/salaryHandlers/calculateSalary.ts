import {
  amountWeekendsAndWeekdays,
  isNum,
  determExtraSalary,
  determStandardSalary,
} from ".";
import {
  IPayload,
  ISalaryInit,
} from "../../../types/salaryTypes";

export const calculateSalary = (
  state: ISalaryInit,
  payload: IPayload
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

  isNum(salaryRate) && (state.salaryRate = salaryRate);

  isNum(premiumRate) && (state.premiumRate = premiumRate);

  isNum(premiumUzn) && (state.premiumUzn = premiumUzn);

  isNum(taxRate) && (state.taxRate = taxRate);

  isNum(sickLeaveWeekDays) &&
    (state.sickLeaveWeekDays = sickLeaveWeekDays);
  isNum(sickLeaveWeekendDays) &&
    (state.sickLeaveWeekendDays = sickLeaveWeekendDays);

  isNum(usedVacation) &&
    (state.usedVacation = usedVacation);
  isNum(bloodDonation) &&
    (state.bloodDonation = bloodDonation);
  isNum(holidays) && (state.holidays = holidays);

  state.weekDays =
    weekdays -
    state.sickLeaveWeekDays -
    state.holidays -
    state.usedVacation -
    state.bloodDonation;

  state.weekendDays = weekends;

  isNum(extraHours_50) &&
    (state.extraHours_50 = extraHours_50);

  isNum(extraHours_100) &&
    (state.extraHours_100 = extraHours_100);

  isNum(extraHours_120) &&
    (state.extraHours_120 = extraHours_120);

  state.nettoPerHours =
    Math.round(
      state.salaryRate * (1 - state.taxRate / 100) * 100
    ) / 100;

  state.standardWorkHours = state.weekDays * 8;

  state.standardSalary = determStandardSalary(state);

  state.extraSalary = determExtraSalary(state);

  state.totalSalary =
    state.standardSalary + state.extraSalary;
};
