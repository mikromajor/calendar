export const SALARY_INIT = {
  year: 2023,
  month: 1,
  salaryRate: 38,
  premiumRate: 1.3,
  taxRate: 0.73,
  nettoPerHours: 0,
  // nettoPerHours() {
  //   return (
  //     this.salaryRate * this.premiumRate * this.taxRate
  //   );
  // },
  weekDays: 0,
  weekendDays: 0,
  standardWorkHours: 0,
  // standardWorkHours() {
  //   return this.weekDays * 8;
  // },

  extraHours_50: 0,
  extraHours_100: 0,

  sickLeave: 0,
  usedVacation: 0,
  bloodDonation: 0,
  standardSalary: 0,
  // standardSalary() {
  //   return this.standardWorkHours() * this.nettoPerHours();
  // },
  extraSalary: 0,
  // extraSalary() {
  //   return (
  //     (this.extraHours_50 * PREMIUM_COEFFICIENT.pr_50 +
  //       this.extraHours_100 * PREMIUM_COEFFICIENT.pr_100) *
  //     this.nettoPerHours()
  //   );
  // },
  totalSalary: 0,
  // totalSalary() {
  //   return this.standardSalary() + this.extraSalary();
  // },
};

export const PREMIUM_COEFFICIENT = {
  pr_50: 1.5,
  pr_100: 2,
  pr_120: 2.2,
};