const {
  amountWeekendsAndWeekdays,
} = require("./amountWeekendsAndWeekdays");

const {
  SALARY_COEFFICIENTS,
} = require("../../constants/initStates");

const calcSalary = (salary, vacationCoef = 0) => {
  const {
    sickRate,
    premium_50_percent,
    premium_100_percent,
    premium_120_percent,
  } = SALARY_COEFFICIENTS;

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
    year,
    month,
  } = salary;

  const { weekends, weekdays } = amountWeekendsAndWeekdays(
    year,
    month
  );

  salary.weekDays =
    weekdays -
    sickLeaveWeekDays -
    holidays -
    usedVacation -
    bloodDonation;

  salary.weekendDays = weekends;

  salary.nettoPerHours =
    Math.round(salaryRate * (1 - taxRate / 100) * 100) /
    100;

  const bloodDonationProfit =
    bloodDonation * 8 * salary.nettoPerHours;

  const seekLeaveProfit =
    (sickLeaveWeekDays + sickLeaveWeekendDays) *
    salary.nettoPerHours *
    8 *
    sickRate;

  let vacationProfit = vacationCoef
    ? vacationCoef * usedVacation
    : 8 * salary.nettoPerHours * usedVacation;

  salary.standardWorkHours = salary.weekDays * 8;

  salary.standardSalary =
    salary.standardWorkHours * salary.nettoPerHours +
    bloodDonationProfit +
    vacationProfit +
    seekLeaveProfit;

  const premiumConstProfit =
    premiumUzn * (1 - taxRate / 100);

  const premiumRateProfit =
    (premiumRate / 100) *
    salary.nettoPerHours *
    salary.standardWorkHours;

  salary.extraSalary = Math.round(
    (extraHours_50 * premium_50_percent +
      extraHours_100 * premium_100_percent +
      extraHours_120 * premium_120_percent) *
      salary.nettoPerHours +
      premiumConstProfit +
      premiumRateProfit
  );

  salary.totalSalary =
    salary.standardSalary + salary.extraSalary;
};
module.exports = { calcSalary };
