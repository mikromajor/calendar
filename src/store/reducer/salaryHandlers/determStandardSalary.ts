import { SalaryInit } from "../../../types/salaryTypes";
import { SOCIAL_COEFFICIENTS } from "../../../constants/salaryConstants";
import { determineVacationPayCoefficient } from ".";

export const determStandardSalary = (state: SalaryInit) => {
  let averageVacationPayPerDay = 1;
  const { bloodDonationCoefficient, sickCoefficient } =
    SOCIAL_COEFFICIENTS;

  state.usedVacation > 0 &&
    (averageVacationPayPerDay =
      determineVacationPayCoefficient(state));

  let premiumConstPayment =
    state.premiumUzn * (1 - state.taxRate / 100);
  let premiumRatePayment =
    (state.premiumRate / 100) *
    state.nettoPerHours *
    state.standardWorkHours;

  let sumBloodDonationPayment =
    state.bloodDonation *
    8 *
    state.salaryRate *
    bloodDonationCoefficient;

  return Math.round(
    state.standardWorkHours * state.nettoPerHours +
      state.usedVacation * averageVacationPayPerDay +
      (state.sickLeaveWeekDays +
        state.sickLeaveWeekendDays) *
        sickCoefficient *
        state.nettoPerHours *
        8 +
      state.bloodDonation *
        8 *
        state.salaryRate *
        bloodDonationCoefficient +
      state.premiumUzn * (1 - state.taxRate / 100)
  );
};
// TODO: зробити хворобові як середнє за останні 12 місяців
