import {
  SALARY_INIT,
  TABLE_HEADINGS,
} from "../constants/salaryConstants";

export type SalaryInit = typeof SALARY_INIT;

export type KeysSalaryInit = keyof SalaryInit;

export type PayloadType = {
  month?: number;
  year?: number;

  salaryRate?: number;
  premiumRate?: number;
  premiumUzn?: number;
  taxRate?: number;

  extraHours_50?: number;
  extraHours_100?: number;
  extraHours_120?: number;

  sickLeaveWeekDays?: number;
  sickLeaveWeekendDays?: number;

  holidays?: number;
  usedVacation?: number;
  bloodDonation?: number;
};
export type PayloadsKeys = keyof PayloadType;

type TableHeadings = typeof TABLE_HEADINGS;

export type KeysLang = keyof TableHeadings;

// TS PICK & OMIT EXAMPLE:

//  type Payload = {
//   extraHours: number;
//   Month: number;
//   Year: number;
// };

// type removeField = Omit<Payload, 'Month'|'Year'>

// type addField = Pick<Payload, 'extraHours'>&{salary:number} // left extraHours and add salary

// export type Entries<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][]; // how does it work?
