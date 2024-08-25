import {
  SALARY_RESULTS,
  SALARY_INTRODUCTIONS,
  SALARY_DATE,
} from "../constants/salaryConstants";
import { UserLanguages } from "../types/userTypes";

export type ISalaryResults = typeof SALARY_RESULTS;
export type ISalaryIntroduction =
  typeof SALARY_INTRODUCTIONS;
export type ISalaryDate = typeof SALARY_DATE;

export type ISalaryInit = ISalaryResults &
  ISalaryIntroduction &
  ISalaryDate;

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
  ISalaryResults & ISalaryIntroduction,
  string
>;

//Example to add a new parameter in a language object :
interface AddContent extends ConvertedISalaryInit {
  header: string;
  date: string;
  //newFieldName: string
}

type CreateContentType<IKey, IVal> = {
  [k in keyof IKey]: IVal;
};
export type ISalaryContent = CreateContentType<
  typeof UserLanguages,
  AddContent
>;
//---------End typing ISalaryContent---////
