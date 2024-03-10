import { SALARY_CONTENT } from "../constants/salaryConstants";

export type SalaryInit = {
  year: number;
  month: number;
  salaryRate: number;
  premiumRate: number;
  premiumUzn: number;
  taxRate: number;
  nettoPerHours: number;
  weekDays: number;
  weekendDays: number;
  standardWorkHours: number;
  extraHours_50: number;
  extraHours_100: number;
  extraHours_120: number;
  sickLeaveWeekDays: number;
  sickLeaveWeekendDays: number;
  holidays: number;
  usedVacation: number;
  bloodDonation: number;
  standardSalary: number;
  extraSalary: number;
  totalSalary: number;
};

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

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
// Entries is the function returning type [[key,val],...]

export type EntriesSalaryInit = Entries<SalaryInit>;

// TS PICK & OMIT EXAMPLE:

// type Payload = {
//   extraHours: number;
//   Month: number;
//   Year: string;
// };
// type KeysPayload = keyof Payload;
// // remove written keys
// type PayloadWithoutYear = Omit<Payload, "Year">;
// const rem: removeField = {extraHours:0};

// // save only written keys
// type addField = Pick<
//   PayloadWithoutYear,
//   keyof PayloadWithoutYear
// > & {
//   Year: "2023" | "2024";
//   salary: 5 | 10;
// };
// const pk: addField = {
//   extraHours: 0,
//   Month: 1,
//   Year: "2023",
//   salary: 5,
// };

// type RemoveKindField<SalaryInit> = {
//   [Property in keyof SalaryInit as Exclude<
//     Property,
//     "currentLanguage"
//   >]: number;
// };
