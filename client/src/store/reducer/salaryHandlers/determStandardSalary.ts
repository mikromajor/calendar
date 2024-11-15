import { ISalaryInit } from "types/salaryTypes";

export const determStandardSalary = (
  salary: ISalaryInit
) => {
  const {
    nettoPerHours,
    standardWorkHours,

    bloodDonation,
  } = salary;

  // const averageVacationPayPerDay =
  //   determineVacationPayCoefficient(salary);

  const bloodDonationPayment =
    bloodDonation * 8 * nettoPerHours;

  // const vacationPayment =
  //   usedVacation * averageVacationPayPerDay;

  // const sickPayment =
  //   (sickLeaveWeekDays + sickLeaveWeekendDays) *
  //   sickRate *
  //   nettoPerHours *
  //   8;

  const standardPayment = standardWorkHours * nettoPerHours;

  return Math.round(standardPayment + bloodDonationPayment);
};
