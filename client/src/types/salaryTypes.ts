import {
  SALARY_RESULTS,
  SALARY_INTRODUCTIONS,
} from "../constants/salaryConstants";
import { UserLanguages } from "../types/userTypes";

export type ISalaryResults = typeof SALARY_RESULTS;
export type ISalaryIntroduction =
  typeof SALARY_INTRODUCTIONS;
export type ISalaryInit = ISalaryResults &
  ISalaryIntroduction;

export type ISalaryResultsKeys = keyof ISalaryResults;
export type ISalaryInitKeys = keyof ISalaryInit;

type PartOfObject<O> = {
  [K in keyof O]?: O[K];
};
export type IPayload = PartOfObject<ISalaryIntroduction>;

////---------Start typed ISalaryContent
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
export type ISalaryContent = CreateContentType<
  typeof UserLanguages,
  LangContent
>;
//---------End typed ISalaryContent---////

export function createArrayObjectKeys<T extends object>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj).map(
    (key) => key as unknown as keyof T
  );
}
