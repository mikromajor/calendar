// import { SALARY_CONTENT } from "../constants/salaryConstants";
import { UserLanguages } from "../types/userTypes";

interface INoInputs {
  nettoPerHours: number;
  weekDays: number;
  weekendDays: number;
  standardWorkHours: number;
  standardSalary: number;
  extraSalary: number;
  totalSalary: number;
}
interface IWithInputs {
  year: number;
  month: number;
  salaryRate: number;
  premiumRate: number;
  premiumUzn: number;
  taxRate: number;
  extraHours_50: number;
  extraHours_100: number;
  extraHours_120: number;
  sickLeaveWeekDays: number;
  sickLeaveWeekendDays: number;
  holidays: number;
  usedVacation: number;
  bloodDonation: number;
}
export type NoInputsKeys = keyof INoInputs;
export type SalaryInit = INoInputs & IWithInputs;
export type SalaryInitKeys = keyof SalaryInit;

type PartOfObject<O> = {
  [K in keyof O]?: O[K];
};
export type IPayload = PartOfObject<IWithInputs>;

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

// Partial is the function returning array of type
//[[key1_,val_1],[key_2,val_2]...]

// type Partial<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][];

// type IPayload = Part<SalaryInit>;

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
