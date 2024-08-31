const {
  amountWeekendsAndWeekdays,
} = require("./amountWeekendsAndWeekdays");

const calcSalary = (salary, vacationCoef) => {
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
    salary.sickLeaveWeekDays -
    salary.holidays -
    salary.usedVacation -
    salary.bloodDonation;

  salary.weekendDays = weekends;

  salary.nettoPerHours =
    Math.round(
      salary.salaryRate * (1 - salary.taxRate / 100) * 100
    ) / 100;

  const bloodDonationPayment =
    bloodDonation * 8 * nettoPerHours;

  vacationCoef && (vacationCoef = 8 * salary.nettoPerHours);

  salary.standardWorkHours = salary.weekDays * 8;

  salary.standardSalary =
    standardWorkHours * nettoPerHours +
    vacationCoef * usedVacation;

  salary.extraSalary = determExtraSalary(salary);

  salary.totalSalary =
    salary.standardSalary + salary.extraSalary;
};
module.exports = { calcSalary };
