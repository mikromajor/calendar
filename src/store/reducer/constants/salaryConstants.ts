// нельзя помещать ф-и в стeйт
import {
  KeysSalaryInit,
  Langs,
  SalaryInit,
} from "../types/salaryTypes";

const currentYear = new Date().getFullYear();

export const SALARY_INIT: SalaryInit = {
  currentLanguage: "UA",
  year: currentYear,
  month: 1,
  salaryRate: 0,
  premiumRate: 0,
  premiumUzn: 0,
  taxRate: 26.7,
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
  sickCoefficient: 0.64,
  bloodDonationCoefficient: 1,
};

export const SALARY_KEYS = Object.keys(
  SALARY_INIT
) as KeysSalaryInit[];

export const NO_INPUTS = [
  "nettoPerHours",
  "weekDays",
  "weekendDays",
  "standardWorkHours",
  "standardSalary",
  "extraSalary",
  "totalSalary",
];

export const SALARY_CONTENT = {
  UA: {
    header: "Зарплата",
    changeLanguage: "Мова",
    year: "Рік",
    month: "Місяць",
    salaryRate: "Ставка брутто, зл/год",
    nettoPerHours: "Ставка нетто, зл/год",
    taxRate: "Податкові та соціальні відрахування, %",
    premiumRate: "Премія до ставки, %",
    premiumUzn: "Премія стала брутто, зл",
    extraHours_50: "К-ть годин понаднорм. з оплатою +50%",
    extraHours_100: "К-ть годин понаднорм. з оплатою +100%",
    extraHours_120: "К-ть годин понаднорм. з оплатою +120%",
    sickLeaveWeekDays: "К-ть днів хворобових в будні",
    sickLeaveWeekendDays: "К-ть днів хворобових в вихідні",
    usedVacation: "Використано днів відпустки",
    bloodDonation: "Кроводавство, днів в будні",
    holidays: "К-ть святкових днів в місяці",
    weekDays: "К-ть робочих днів в місяці",
    weekendDays: "К-ть вихідних днів в місяці",
    standardWorkHours: "К-ть робочих годин в місяці",
    standardSalary: "ЗП нормова, зл нетто",
    extraSalary: "ЗП понаднормова, зл нетто",
    totalSalary: "ЗП вся, зл нетто",
  },
  EN: {
    header: "Salary",
    changeLanguage: "Language",
    year: "Year",
    month: "Month",
    salaryRate: "Salary rate, gross zl/h",
    nettoPerHours: "Salary rate, net zl/h",
    taxRate: "Tax rate, %",
    premiumRate: "Premium rate, %",
    premiumUzn: "Premium const, gross zl",
    extraHours_50: "Extra hours +50%, h",
    extraHours_100: "Extra hours +100%, h",
    extraHours_120: "Extra hours +120%, h",
    sickLeaveWeekDays: "Sick leave week days",
    sickLeaveWeekendDays: "Sick leave weekend days",
    usedVacation: "Used vacation",
    bloodDonation: "Blood donation, days",
    holidays: "Holidays",
    weekDays: "Week days",
    weekendDays: "Weekends",
    standardWorkHours: "Standard work hours, h",
    standardSalary: "Standard salary, net zl",
    extraSalary: "Extra salary, net zl",
    totalSalary: "Total salary, net zl",
  },
  PL: {
    header: "Wyplata",
    changeLanguage: "Język",
    year: "Rok",
    month: "Miesiąc",
    salaryRate: "Stawka brutto zł/g",
    nettoPerHours: "Stawka netto zł/g",
    taxRate: "Potrąncenia składkowe i podatkowe, %",
    premiumRate: "Premia w procentach do stawki, %",
    premiumUzn: "Premia uznaniowa, brutto zł",
    extraHours_50: "Ilość nadgodzin z opłatą +50%, g",
    extraHours_100: "Ilość nadgodzin z opłatą +100%, g",
    extraHours_120: "Ilość nadgodzin z opłatą +120%, g",
    sickLeaveWeekDays: "Chorobowe w dni powszechne, dni",
    sickLeaveWeekendDays: "Chorobowe w wikend, dni",
    usedVacation: "Urlop, dni",
    bloodDonation: "Krwiodawstwo, dni powsz.",
    holidays: "Swięta, dni",
    weekDays: "Iłość dni roboczych w miesiącu",
    weekendDays: "Iłość dni wolnych",
    standardWorkHours: "Ilość rob. godzin w miesiąncu, g",
    standardSalary: "Wypłata podstawowa, netto zł",
    extraSalary: "Wypłata extra, netto zł",
    totalSalary: "Wypłata pełna, netto zł",
  },
};

export const LANGS = Object.keys(SALARY_CONTENT) as Langs[];
