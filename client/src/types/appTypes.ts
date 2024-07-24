export enum AppLanguages {
  UA = "UA",
  PL = "PL",
  EN = "EN",
}
export enum AppThemes {
  WHITE = "white-theme",
  DARK = "dark-theme",
}
export interface User {
  id: string;
  email: string;
  token: string;
}

//  export type LanguagesList = keyof typeof AppLanguages;
