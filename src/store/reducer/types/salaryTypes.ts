import {
  SALARY_INIT,
  SALARY_CONTENT,
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

type TableHeadings = typeof SALARY_CONTENT;

export type KeysLang = keyof TableHeadings;

// type SalaryWithoutCurrentLng = Omit<SalaryInit, "currentLanguage">
// type SalaryWithCorrectLng  =SalaryWithoutCurrentLng|{currentLanguage:KeysLang}

// TS PICK & OMIT EXAMPLE:

// type Payload = {
//   extraHours: number;
//   Month: number;
//   Year: number;
// };
// // remove written keys
// type removeField = Omit<Payload, "Month" | "Year">;
// const rem: removeField = {extraHours:0};

// // save only written keys
// type addField = Pick<Payload, "extraHours"> & {
//   salary: number;
// };
// const pk: addField = { extraHours: 0, salary: 5 };

// type RemoveKindField<SalaryInit> = {
//   [Property in keyof SalaryInit as Exclude<
//     Property,
//     "currentLanguage"
//   >]: string;
// };

// export type Entries<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][]; // how does it work?
