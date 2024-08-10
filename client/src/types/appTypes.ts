import { AlcoState } from "./alcoTypes";
import { SalaryInit } from "./salaryTypes";

export enum AppLanguages {
  UA = "UA",
  PL = "PL",
  EN = "EN",
}
export enum AppThemes {
  WHITE = "white-theme",
  DARK = "dark-theme",
}
export interface IUser {
  id: string;
  email: string;
  token: string;
}

export interface IUserResReject {
  message: string;
  status: string;
}
export interface EmailPassword {
  email: string;
  password: string;
}
export interface IServerRes extends IUser {
  message: string;
  alcoState: AlcoState;
  salaryData: SalaryInit;
}

//  export type LanguagesList = keyof typeof AppLanguages;
