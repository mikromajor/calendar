import { AlcoState } from "./alcoTypes";
import { ISalaryInit } from "./salaryTypes";

export enum UserLanguages {
  UA = "UA",
  PL = "PL",
  EN = "EN",
}
export enum UserThemes {
  WHITE = "white-theme",
  DARK = "dark-theme",
}
export interface IUser {
  token: string;
  message: string;
}

export interface IUserResReject {
  message: string;
  status: string;
}
export interface EmailPassword {
  email: string;
  password: string;
}
export interface IServerRes {
  message: string;
  alcoState: AlcoState;
  salary: ISalaryInit;
  token: string;
}
export type ModalOpen =
  | ""
  | "message"
  | "reg"
  | "login"
  | "logout";

//  export type LanguagesList = keyof typeof UserLanguages;
