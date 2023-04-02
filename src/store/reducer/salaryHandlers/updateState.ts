import { PREMIUM_COEFFICIENT } from "../constants/salaryConstants";
import {
  amountWeekendsAndWeekdays,
  getKey,
  checkYearAndMonth,
} from "./";
import {
  PayloadType,
  InitSalaryState,
} from "../types/salaryTypes";

export const updateState = (
  state: InitSalaryState,
  payload: PayloadType
) => {
  const {
    usersMonth,
    usersYear,
    usersSalaryRate,
    usersPremiumRate,
    usersTaxRate,
    workedExtraHours_50,
    workedExtraHours_100,
    sickLeave,
    usedVacation,
    bloodDonation,
  } = payload;

  const { weekends, weekdays, month, year } =
    amountWeekendsAndWeekdays(usersYear, usersMonth);

  usersYear && (state.year = usersYear);
  usersMonth && (state.month = usersMonth);

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

  if (checkYearAndMonth(year, month)) {
    const key = getKey(year, month);
    window.localStorage.setItem(key, JSON.stringify(state));
  }
};
