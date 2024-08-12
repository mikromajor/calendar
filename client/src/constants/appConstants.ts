import {
  AppThemes,
  AppLanguages,
  IUser,
} from "../types/appTypes";
import { SALARY_INIT } from "./salaryConstants";
import { INIT_ALCO_STATE } from "./alcoConstants";

const INIT_USER: IUser = {
  token: "",
};

export const INIT_APP_STATE = {
  currentLang: AppLanguages.UA,
  currentTheme: AppThemes.WHITE,
  isLoading: false,
  isError: false,
  message: "",
  salary: SALARY_INIT,
  alcoData: INIT_ALCO_STATE,
  user: INIT_USER,
};

export const APP_CONTENT = {
  [AppLanguages.EN]: {
    lblTheme: "Theme",
    goToAlcoCalc: "Alcohol calendar",
    goToSalary: "Salary",
    lblLang: "Change language:",
    [AppThemes.DARK]: "Black",
    [AppThemes.WHITE]: "White",
  },
  [AppLanguages.PL]: {
    lblTheme: "Theme",
    goToAlcoCalc: "Alcocalendarz",
    goToSalary: "Wypłata",
    lblLang: "Zmień język",
    [AppThemes.DARK]: "Ciemna",
    [AppThemes.WHITE]: "Światła",
  },
  [AppLanguages.UA]: {
    lblTheme: "Tема",
    goToAlcoCalc: "Алкокалендар",
    goToSalary: "Зарплата",
    lblLang: "Змінити мову",
    [AppThemes.DARK]: "Темна",
    [AppThemes.WHITE]: "Світла",
  },
};

export const LANGUAGES_LIST = Object.keys(
  APP_CONTENT
) as (keyof typeof AppLanguages)[];
