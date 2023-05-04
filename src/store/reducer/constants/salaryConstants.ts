// нельзя помещать ф-и в стайт
import { KeysSalaryInit } from "../types/salaryTypes";

export const SALARY_INIT = {
  year: 2023,
  month: 1,
  salaryRate: 34,
  premiumRate: 1,
  taxRate: 0.7,
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

export const PREMIUM_COEFFICIENT = {
  pr_50: 1.5,
  pr_100: 2,
  pr_120: 2.2,
};

export const SALARY_KEYS = Object.keys(
  SALARY_INIT
) as any as KeysSalaryInit[];

export const TABLE_HEADINGS = [
  "Рік",
  "Місяць",
  "Ставка",
  "Податок",
  "Премія",

  "Понаднормові 50%",
  "Понаднормові 100%",
  "Понаднормові 120%",
  "Хворобові в будні",
  "Хворобові в вихідні",

  "Відпустка",
  "Кроводавство",
  "Святкові",
  "Будні",
  "Вихідні",
  "К-ть робочих годин",
  "ЗП нормова",
  "ЗП понаднормова",
  "ЗП вся",
];
