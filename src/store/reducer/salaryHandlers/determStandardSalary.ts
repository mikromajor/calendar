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

  return Math.round(
    state.standardWorkHours * state.nettoPerHours +
      state.usedVacation * averageVacationPayPerDay +
      (state.sickLeaveWeekDays +
        state.sickLeaveWeekendDays) *
        sickCoefficient *
        state.nettoPerHours *
        8 +
      state.bloodDonation *
        state.salaryRate *
        8 *
        bloodDonationCoefficient +
      state.premiumUzn
  );
};
// TODO: зробити хворобові як середнє за останні 12 місяців
