import { AppLanguages } from "../types/appTypes";

export const INIT_APP_STATE = {
  currentLang: AppLanguages.UA,
};

export const APP_CONTENT = {
  [AppLanguages.EN]: {
    btnChangeCalc: "Change calculator",
    lblLang: "Change language:",
  },
  [AppLanguages.PL]: {
    btnChangeCalc: "Zmień kalkulator",
    lblLang: "Zmień język",
  },
  [AppLanguages.UA]: {
    btnChangeCalc: "Зміни калькулятор",
    lblLang: "Мова",
  },
};

export const LANGUAGES_LIST = Object.keys(
  APP_CONTENT
) as (keyof typeof AppLanguages)[];
