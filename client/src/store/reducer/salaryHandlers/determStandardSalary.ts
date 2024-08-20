import { ISalaryInit } from "../../../types/salaryTypes";
import { COEFFICIENTS } from "../../../constants/salaryConstants";
import { determineVacationPayCoefficient } from ".";

export const determStandardSalary = (
  state: ISalaryInit
) => {
  const { sickRate } = COEFFICIENTS;

  const {
    premiumRate,
    premiumUzn,
    taxRate,
    nettoPerHours,
    standardWorkHours,
    usedVacation,
    bloodDonation,
    sickLeaveWeekDays,
    sickLeaveWeekendDays,
  } = state;

  const averageVacationPayPerDay =
    determineVacationPayCoefficient(state);

  const premiumConstPayment =
    premiumUzn * (1 - taxRate / 100);

  const premiumRatePayment =
    (premiumRate / 100) * nettoPerHours * standardWorkHours;

  const bloodDonationPayment =
    bloodDonation * 8 * nettoPerHours;

  const vacationPayment =
    usedVacation * averageVacationPayPerDay;

  const sickPayment =
    (sickLeaveWeekDays + sickLeaveWeekendDays) *
    sickRate *
    nettoPerHours *
    8;

  const standardPayment = standardWorkHours * nettoPerHours;

  return Math.round(
    standardPayment +
      sickPayment +
      vacationPayment +
      bloodDonationPayment +
      premiumRatePayment +
      premiumConstPayment
  );
};
// TODO: зробити хворобові як середнє за останні 12 місяців
