import { SALARY_CONTENT } from "../constants/salaryConstants";
import { UserLanguages } from "../types/userTypes";

export interface SalaryInit {
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
}

export type NoInputsKeys =
  | "nettoPerHours"
  | "weekDays"
  | "weekendDays"
  | "standardWorkHours"
  | "standardSalary"
  | "extraSalary"
  | "totalSalary";

type PartOfObject<O, DelType> = {
  [K in keyof O as Exclude<K, DelType>]?: O[K];
};

export type IPayload = PartOfObject<
  SalaryInit,
  NoInputsKeys
>;

export type InputsKeys = keyof IPayload;

export type SalaryInitKeys = keyof SalaryInit;

type ChangeObjValType<O, ValueNewType> = {
  [K in keyof O]: ValueNewType;
};

type SalaryInitValString = ChangeObjValType<
  SalaryInit,
  string
>;

//add new field bellow, if you want to add new field in SALARY_CONTENT[currentLanguage].newFieldName
interface LangContent extends SalaryInitValString {
  header: string;
  //newFieldName: string
}

type CreateContentType<IKey, IVal> = {
  [k in keyof IKey]: IVal;
};

export type SalaryContent = CreateContentType<
  typeof UserLanguages,
  LangContent
>;

// export type IPayload = {
//   month?: number;
//   year?: number;

//   salaryRate?: number;
//   premiumRate?: number;
//   premiumUzn?: number;
//   taxRate?: number;

//   extraHours_50?: number;
//   extraHours_100?: number;
//   extraHours_120?: number;

//   sickLeaveWeekDays?: number;
//   sickLeaveWeekendDays?: number;

//   holidays?: number;
//   usedVacation?: number;
//   bloodDonation?: number;
// };

// Partial is the function returning type [[key,val],...]
// type Partial<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][];

// Part is the function returning type {key?:val;}
// type Part<O> = {
//   [K in keyof O]?: O[K];
// };
// type IPayload = Part<SalaryInit>;
// type IPayloadKeys = keyof IPayload;
// test
//  const payload: IPayload ={
//   month: 8,
//  }

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
// type PartWithRemoveField<O> = {
//   [K in keyof O as Exclude<
//     K,
//     | "nettoPerHours"
//     | "weekDays"
//     | "weekendDays"
//     | "standardWorkHours"
//     | "standardSalary"
//     | "extraSalary"
//     | "totalSalary"
//   >]?: O[K];
// };
// type IPayload_2 = PartWithRemoveField<SalaryInit>;
// type IPayload_2_keys = keyof IPayload_2;
//
// const test_2: IPayload_2 = {
//   month: 8,
// };
// const test_3:IPayload_2 = {}
// const test_4:IPayload_2 = {
//   nettoPerHours: 10
// } // must be error
