// нельзя помещать ф-и в стeйт
import {
  KeysSalaryInit,
  KeysLang,
  SalaryInit,
} from "../types/salaryTypes";

export const SALARY_INIT = {
  currentLanguage: "UA",
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
  sickCoefficient: 0.64,
  bloodDonationCoefficient: 1,
};

export const SALARY_KEYS = Object.keys(
  SALARY_INIT
) as KeysSalaryInit[];

export const NO_INPUTS = [
  "currentLanguage",
  "nettoPerHours",
  "weekDays",
  "weekendDays",
  "standardWorkHours",
  "standardSalary",
  "extraSalary",
  "totalSalary",
];

type RemoveKindField<SalaryInit> = {
  [Property in keyof SalaryInit as Exclude<
    Property,
    "currentLanguage"
  >]: string;
};

export const TABLE_HEADINGS = {
  UA: {
    year: "Рік",
    month: "Місяць",
    salaryRate: "Ставка, zł/g",
    nettoPerHours: "Ставка нетто, zł/g",
    taxRate: "Коефіц. податокий",
    premiumRate: "Коеф. премії до ставки, %",
    premiumUzn: "Премія стала, zł нетто",
    extraHours_50: "К-ть понаднорм. з оплатою +50%",
    extraHours_100: "К-ть понаднорм. з оплатою +100%",
    extraHours_120: "К-ть понаднорм. з оплатою +120%",
    sickLeaveWeekDays: "К-ть хворобових в будні",
    sickLeaveWeekendDays: "К-ть хворобових в вихідні",
    usedVacation: "Відпустка, дн",
    bloodDonation: "Кроводавство в будні, дн",
    holidays: "К-ть святкових днів",
    weekDays: "К-ть робочих днів",
    weekendDays: "К-ть вихідних днів",
    standardWorkHours: "К-ть робочих годин",
    standardSalary: "ЗП нормова",
    extraSalary: "ЗП понаднормова",
    totalSalary: "ЗП вся",
  },
  EN: {
    year: "Year",
    month: "Month",
    salaryRate: "Salary rate",
    nettoPerHours: "Netto per hours",
    taxRate: "Tax rate",
    premiumRate: "Premium rate",
    premiumUzn: "Premium const",
    extraHours_50: "Extra hours +50%",
    extraHours_100: "Extra hours +100%",
    extraHours_120: "Extra hours +120%",
    sickLeaveWeekDays: "Sick leave week days",
    sickLeaveWeekendDays: "Sick leave weekend days",
    usedVacation: "Used vacation",
    bloodDonation: "Blood donation",
    holidays: "Holidays",
    weekDays: "Week days",
    weekendDays: "Weekends",
    standardWorkHours: "Standard work hours",
    standardSalary: "Standard salary",
    extraSalary: "Extra salary",
    totalSalary: "Total salary",
  },
  PL: {
    year: "Rok",
    month: "Miesiąc",
    salaryRate: "Stawka, zł/g",
    nettoPerHours: "Stawka netto, zł/g",
    taxRate: "Współczynnik podatku",
    premiumRate: "Premia % do stawki",
    premiumUzn: "Premia uznaniowa, zł netto",
    extraHours_50: "Ilość nadgodzin z opłatą +50%",
    extraHours_100: "Ilość nadgodzin z opłatą +100%",
    extraHours_120: "Ilość nadgodzin z opłatą +120%",
    sickLeaveWeekDays: "Chorobowe w dni powszechne, dni",
    sickLeaveWeekendDays: "Chorobowe w wikend, dni",
    usedVacation: "Urlop, dni",
    bloodDonation: "Krwiodawstwo, dni powsz.",
    holidays: "Swięta",
    weekDays: "Dni robocze",
    weekendDays: "Dni wolne",
    standardWorkHours: "Ilość rob. godzin w mieśąncu",
    standardSalary: "Wypłata podstawowa, zł",
    extraSalary: "Wypłata extra",
    totalSalary: "Wypłata pełna",
  },
};

export const ALL_ALCO_CONTENT = Object.keys(
  TABLE_HEADINGS
) as KeysLang[];
