export enum APP_LANGUAGES {
  UA = "UA",
  PL = "PL",
  EN = "EN",
}

export const INIT_APP_STATE = {
  currentLang: APP_LANGUAGES.UA,
};

export const APP_CONTENT = {
  [APP_LANGUAGES.EN]: {
    btnChangeCalc: "Change calculator",
    lblLang: "Change language:",
  },
  [APP_LANGUAGES.PL]: {
    btnChangeCalc: "Zmień kalkulator",
    lblLang: "Zmień język",
  },
  [APP_LANGUAGES.UA]: {
    btnChangeCalc: "Зміни калькулятор",
    lblLang: "Мова",
  },
};
