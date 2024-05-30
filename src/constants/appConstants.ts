import { AppThemes, AppLanguages } from "../types/appTypes";

export const INIT_APP_STATE = {
  currentLang: AppLanguages.UA,
  currentTheme: AppThemes.WHITE,
};

export const APP_CONTENT = {
  [AppLanguages.EN]: {
    lblTheme: "theme",
    btnChangeCalc: "Change calculator",
    lblLang: "Change language:",
  },
  [AppLanguages.PL]: {
    lblTheme: "theme",
    btnChangeCalc: "Zmień kalkulator",
    lblLang: "Zmień język",
  },
  [AppLanguages.UA]: {
    lblTheme: "тема",
    btnChangeCalc: "Зміни калькулятор",
    lblLang: "Змінити мову",
  },
};

export const LANGUAGES_LIST = Object.keys(
  APP_CONTENT
) as (keyof typeof AppLanguages)[];
