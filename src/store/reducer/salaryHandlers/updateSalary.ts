import {
  amountWeekendsAndWeekdays,
  getCurrentDate,
  saveSalaryInStorage,
  numbersLetsGo,
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

  // TODO:  рахував  відпустку не як середнє за 3 місяці а як звиклі дні з премією
};
