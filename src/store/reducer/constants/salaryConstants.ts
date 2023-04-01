export const INIT_SALARY_STATE = {
  year: 2023,
  month: 1,
  salaryRate: 38,
  premiumRate: 1.3,
  taxRate: 0.73,
  netto() {
    return (
      this.salaryRate * this.premiumRate * this.taxRate
    );
  },
  weekDays: 0,
  weekendDays: 0,
  standardWorkHours() {
    return this.weekDays * 8;
  },

  extraHours_50: 0,
  extraHours_100: 0,
  sickLeave: 0,
  usedVacation: 0,
  bloodDonation: 0,
  standardSalary() {
    return this.standardWorkHours() * this.netto();
  },
  extraSalary() {
    return (
      (this.extraHours_50 + this.extraHours_100) *
      this.netto()
    );
  },
  totalSalary() {
    return this.standardSalary() + this.extraSalary();
  },
};

export const PREMIUM_COEFFICIENT = {
  pr_50: 1.5,
  pr_100: 2,
  pr_120: 2.2,
};
