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
  },
  [APP_LANGUAGES.PL]: { btnChangeCalc: "Zmień kalkulator" },
  [APP_LANGUAGES.UA]: {
    btnChangeCalc: "Зміни калькулятор",
  },
};
