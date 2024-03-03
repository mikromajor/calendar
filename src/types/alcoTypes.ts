import {
  INIT_ALCO_STATE,
  ALCO_CONTENT,
} from "../constants/alcoConstants";
import { alcoActions } from "../store/reducer/alcoReducer";

export interface Total {
  totalVodka: number;
  totalBill: number;
}

export interface Month extends Total {
  days: Total[];
}

export interface Year extends Total {
  months: Month[];
}

export type Language = keyof typeof ALCO_CONTENT;
export type AlcoContentLangData =
  keyof typeof ALCO_CONTENT.EN;

export interface AlcoState extends Total {
  currentDay: string;
  currentMonth: string;
  currentYear: string;
  currentLang: Language;
  yearData: Year;
}

export type StateKeys = keyof AlcoState;

export type AlcoActionsType = typeof alcoActions;
export type AlcoActionsKeys = keyof AlcoActionsType;

const { changeYear, clearMonthData } = alcoActions;
export type ActionsChangeData =
  | typeof changeYear
  | typeof clearMonthData;
