// нельзя помещать ф-и в стeйт
import { KeysSalaryInit } from "../types/salaryTypes";

export const SALARY_INIT = {
  year: 2023,
  month: 1,
  salaryRate: 0,
  premiumRate: 1,
  premiumUzn: 0,
  taxRate: 0.733,
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

export const SOCIAL_COEFFICIENTS = {
  sickCoefficient: 0.8,
  bloodDonationCoefficient: 1,
};

export const SALARY_KEYS = Object.keys(
  SALARY_INIT
) as any as KeysSalaryInit[];

export const INPUT_KEYS = [
  "month",
  "year",

  "salaryRate",
  "premiumUzn",
  "premiumRate",
  "taxRate",

  "extraHours_50",
  "extraHours_100",
  "extraHours_120",

  "sickLeaveWeekDays",
  "sickLeaveWeekendDays",

  "holidays",
  "usedVacation",
  "bloodDonation",
];

export const TABLE_HEADINGS = {
  ua: {
    year: "Рік",
    month: "Місяць",
    salaryRate: "Ставка",
    taxRate: "Податок",
    premiumRate: "Премія % до ставки",
    premiumUzn: "Премія стала",
    extraHours_50: "Понаднормові 50%",
    extraHours_100: "Понаднормові 100%",
    extraHours_120: "Понаднормові 120%",
    sickLeaveWeekDays: "Хворобові в будні",
    sickLeaveWeekendDays: "Хворобові в вихідні",
    usedVacation: "Відпустка",
    bloodDonation: "Кроводавство",
    holidays: "Святкові",
    weekDays: "Будні",
    weekendDays: "Вихідні",
    standardWorkHours: "К-ть робочих годин",
    standardSalary: "ЗП нормова",
    extraSalary: "ЗП понаднормова",
    totalSalary: "ЗП вся",
  },
  en: {
    year: " year",
    month: " month",
    salaryRate: "salary rate",
    taxRate: " tax rate",
    premiumRate: " premium rate",
    premiumUzn: "premium const",
    extraHours_50: " extra hours +50%",
    extraHours_100: " extra hours +100%",
    extraHours_120: " extra hours +120%",
    sickLeaveWeekDays: " sick leave week days",
    sickLeaveWeekendDays: " sick leave weekend days",
    usedVacation: " used vacation",
    bloodDonation: " blood donation",
    holidays: " holidays",
    weekDays: " week days",
    weekendDays: " weekends",
    standardWorkHours: " standard work hours",
    standardSalary: "  standard salary",
    extraSalary: "  extra salary",
    totalSalary: " total salary",
  },
};
