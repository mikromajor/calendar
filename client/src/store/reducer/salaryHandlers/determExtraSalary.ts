import { ISalaryInit } from "../../../types/salaryTypes";
import { COEFFICIENTS } from "../../../constants/salaryConstants";

export const determExtraSalary = (state: ISalaryInit) =>
  Math.round(
    (state.extraHours_50 * COEFFICIENTS.premium_50_percent +
      state.extraHours_100 *
        COEFFICIENTS.premium_100_percent +
      state.extraHours_120 *
        COEFFICIENTS.premium_120_percent) *
      state.nettoPerHours
  );
