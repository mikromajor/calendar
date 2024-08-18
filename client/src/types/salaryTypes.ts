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

type Partial<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

// Partial is the function returning type [[key,val],...]

//  type IPayload = Partial<SalaryInit>;

//  type IPayloadWithoutNextFields = Partial<Omit<SalaryInit,'totalSalary'|'extraSalary'|'standardSalary'>>;

// TS PICK & OMIT EXAMPLE:

// interface IExample{
//   extraHours: number;
//   MonthInfo: number;
//   AlcoYear: string;
// };
// type KeysPayload = keyof Payload;
// // remove written keys
// type IExampleRemFields = Omit<IExample, "extraHours"|'MonthInfo'>;

// type IExampleAddFields = Pick<
//   IExample,
//   keyof IExample
// > & {
//   newField: "2023";
//   salary: 5 | 10;
// };
// const pk: IExampleAddFields = {
//   extraHours: 0,
//   MonthInfo: 1,
//   newField: "2023",
//   salary: 5,
// };
// type RemoveField<O> = {
//   [K in keyof O as Exclude<K, "year" | "month">]: string;
// };

// type SalaryWithoutYearMonthInString =
//   RemoveField<SalaryInit>;
