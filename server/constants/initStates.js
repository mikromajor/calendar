const currentYear = new Date().getFullYear() + "";
const currentMonth = new Date().getMonth() + 1 + "";
const currentDay = new Date().getDay() + "";

const currentDate = {
  day: currentDay,
  month: currentMonth,
  year: currentYear,
};

const yearData = {
  totalVodka: 0,
  totalBill: 0,
  months: [],
};

const INIT_ALCO_STATE = {
  currentDate,
  yearData,
};

const SALARY_INIT = {
  year: Number(currentYear),
  month: Number(currentMonth),
  salaryRate: 30,
  premiumRate: 0,
  premiumUzn: 0,
  taxRate: 27,
  nettoPerHours: 0,
  weekDays: 0,
  weekendDays: 0,
  standardWorkHours: 0,
  extraHours_50: 0,
  extraHours_100: 0,
  extraHours_120: 0,
  sickLeaveWeekDays: 0,
  sickLeaveWeekendDays: 0,
  holidays: 0,
  usedVacation: 0,
  bloodDonation: 0,
  standardSalary: 0,
  extraSalary: 0,
  totalSalary: 0,
};

const SALARY_COEFFICIENTS = {
  premium_50_percent: 1.5,
  premium_100_percent: 2,
  premium_120_percent: 2.2,
  sickRate: 0.64,
  bloodDonationRate: 1,
};

module.exports = {
  SALARY_INIT,
  INIT_ALCO_STATE,
  SALARY_COEFFICIENTS,
};
