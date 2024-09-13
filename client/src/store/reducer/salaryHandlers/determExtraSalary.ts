import { ISalaryInit } from "../../../types/salaryTypes";
import { COEFFICIENTS } from "../../../constants/salaryConstants";

export const determExtraSalary = (salary: ISalaryInit) => {
  const {
    premiumRate,
    premiumUzn,
    taxRate,
    nettoPerHours,
    standardWorkHours,
  } = salary;

  const premiumConstPayment =
    premiumUzn * (1 - taxRate / 100);

  const premiumRatePayment =
    (premiumRate / 100) * nettoPerHours * standardWorkHours;

  return Math.round(
    (salary.extraHours_50 *
      COEFFICIENTS.premium_50_percent +
      salary.extraHours_100 *
        COEFFICIENTS.premium_100_percent +
      salary.extraHours_120 *
        COEFFICIENTS.premium_120_percent) *
      salary.nettoPerHours +
      premiumConstPayment +
      premiumRatePayment
  );
};
