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
export type ISalaryIntroductionKeys =
  keyof ISalaryIntroduction;

type PartOfObject<O> = {
  [K in keyof O]?: O[K];
};
export type IPayload = PartOfObject<ISalaryIntroduction>;

////---------Start typing ISalaryContent
type ConvertObjValType<O, NewType> = {
  [K in keyof O]: NewType;
};
type ConvertedISalaryInit = ConvertObjValType<
  ISalaryInit,
  string
>;

//Example to add a new parameter in a language object :
interface LangContent extends ConvertedISalaryInit {
  header: string;
  date: string;
  //newFieldName: string
}
type CreateContentType<IKey, IVal> = {
  [k in keyof IKey]: IVal;
};
export type ISalaryContent = CreateContentType<
  typeof UserLanguages,
  LangContent
>;
//---------End typing ISalaryContent---////
