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

//  export type LanguagesList = keyof typeof AppLanguages;
