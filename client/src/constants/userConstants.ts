import {
  UserThemes,
  UserLanguages,
  IUser,
} from "../types/userTypes";
import SERVICE from "./service";

const INIT_USER: IUser = {
  token: "",
  message: "",
};

export const INIT_USER_STATE = {
  currentLang: UserLanguages.UA,
  currentTheme: UserThemes.WHITE,
  service: SERVICE,
  user: INIT_USER,
};

export const TOP_MENU_CONTENT = {
  [UserLanguages.EN]: {
    lblTheme: "Theme",
    goToAlcoCalc: "Alcohol calendar",
    goToSalary: "Salary",
    lblLang: "Change language:",
    [UserThemes.DARK]: "Black",
    [UserThemes.WHITE]: "White",
  },
  [UserLanguages.PL]: {
    lblTheme: "Theme",
    goToAlcoCalc: "Alcocalendarz",
    goToSalary: "Wypłata",
    lblLang: "Zmień język",
    [UserThemes.DARK]: "Ciemna",
    [UserThemes.WHITE]: "Światła",
  },
  [UserLanguages.UA]: {
    lblTheme: "Tема",
    goToAlcoCalc: "Алкокалендар",
    goToSalary: "Зарплата",
    lblLang: "Змінити мову",
    [UserThemes.DARK]: "Темна",
    [UserThemes.WHITE]: "Світла",
  },
};

export const MESSAGES = {
  unexpectedError: "Unexpected error",
  authRefused: "Authentication refused",
};

export const LANGUAGES_LIST = Object.keys(
  TOP_MENU_CONTENT
) as (keyof typeof UserLanguages)[];
