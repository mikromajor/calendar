import { SalaryInit } from "../../../types/salaryTypes";
import { PREMIUM_COEFFICIENT } from "../../../constants/salaryConstants";

export const determExtraSalary = (state: SalaryInit) =>
  Math.round(
    (state.extraHours_50 * PREMIUM_COEFFICIENT.pr_50 +
      state.extraHours_100 * PREMIUM_COEFFICIENT.pr_100 +
      state.extraHours_120 * PREMIUM_COEFFICIENT.pr_120) *
      state.nettoPerHours
  );
