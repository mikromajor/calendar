// import {
//   SALARY_CONTENT,
//   SALARY_RESULTS,
// } from "../constants/salaryConstants";
import { UserLanguages } from "../types/userTypes";

export interface ISalaryResults {
  nettoPerHours: number;
  weekDays: number;
  weekendDays: number;
  standardWorkHours: number;
  standardSalary: number;
  extraSalary: number;
  totalSalary: number;
}
export interface ISalaryIntroduction {
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

export type ISalaryInit = ISalaryResults &
  ISalaryIntroduction;

export type ISalaryResultsKeys = keyof ISalaryResults;
export type ISalaryInitKeys = keyof ISalaryInit;

type PartOfObject<O> = {
  [K in keyof O]?: O[K];
};
export type IPayload = PartOfObject<ISalaryIntroduction>;

//---------Start typed SalaryContent
type ChangeObjValType<O, NewType> = {
  [K in keyof O]: NewType;
};
type ISalaryInitValString = ChangeObjValType<
  ISalaryInit,
  string
>;

//Example to add a new parameter in a language object :
interface LangContent extends ISalaryInitValString {
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
//---------End typed SalaryContent---//

export function createArrayObjectKeys<T extends object>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj).map(
    (key) => key as unknown as keyof T
  );
}

//test_1
// const arraySalaryResultsKeys = createArrayObjectKeys<ISalaryResults>(SALARY_RESULTS)
// const [v1,v2,v3] = arraySalaryResultsKeys

//--REMEMBER--//
// Partial is the function returning array of type
//[[key1_,val_1],[key_2,val_2]...]

// type Partial<T> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T][];

// type IPayload = Part<ISalaryInit>;

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
// type IPayload_2 = PartWithRemoveField<ISalaryInit>;
// type IPayload_2_keys = keyof IPayload_2;
//
// const test_2: IPayload_2 = {
//   month: 8,
// };
// const test_3:IPayload_2 = {}
// const test_4:IPayload_2 = {
//   nettoPerHours: 10
// } // must be error
