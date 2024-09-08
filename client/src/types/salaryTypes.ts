import {
  SALARY_RESULTS,
  SALARY_INPUTS,
  SALARY_DATE,
} from "../constants/salaryConstants";
import SERVICE_INIT from "../constants/serviceConstants";
import { UserLanguages } from "../types/userTypes";

export type ISalaryResults = typeof SALARY_RESULTS;
export type ISalaryInputs = typeof SALARY_INPUTS;
export type ISalaryDate = typeof SALARY_DATE;
type IService = typeof SERVICE_INIT;

export type ISalaryInit = ISalaryResults &
  ISalaryInputs &
  ISalaryDate;

export type ISalaryResultsKeys = keyof ISalaryResults;
export type ISalaryInputsKeys = keyof ISalaryInputs;

type PartOfObject<O> = {
  [K in keyof O]?: O[K];
};
export type IPayload = PartOfObject<
  ISalaryInputs & ISalaryDate
>;

////---------Start typing ISalaryContent
type ConvertObjValType<O, NewType> = {
  [K in keyof O]: NewType;
};
type ConvertedISalaryInit = ConvertObjValType<
  ISalaryResults & ISalaryInputs,
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
