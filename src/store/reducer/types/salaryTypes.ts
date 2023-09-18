import {
  SALARY_INIT,
  TABLE_HEADINGS,
  INPUT_KEYS,
} from "../constants/salaryConstants";

export type SalaryInit = typeof SALARY_INIT;

export type KeysSalaryInit = keyof SalaryInit;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][]; // how does it work?

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
type TableHeadingsKeys = keyof TableHeadings;

type Ua = typeof TABLE_HEADINGS.ua;
type En = typeof TABLE_HEADINGS.en;
export type UaKeys = keyof Ua;
export type EnKeys = keyof En;

// TS PICK & OMIT EXAMPLE:

//  type Payload = {
//   extraHours: number;
//   Month: number;
//   Year: number;
// };

// type removeField = Omit<Payload, 'Month'|'Year'>

// type addField = Pick<Payload, 'extraHours'>&{salary:number} // left extraHours and add salary
