import {
  INIT_ALCO_STATE,
  ALCO_CONTENT,
  INIT_MONTH_DATA,
} from "../constants/alcoConstants";
import { alcoActions } from "../store/reducer/alcoReducer";

type MonthData = typeof INIT_MONTH_DATA;
export type LgsName = keyof typeof ALCO_CONTENT;
export type AlcoContentLangData =
  keyof typeof ALCO_CONTENT.EN;

export type AlcoState = {
  currentDay: string;
  currentMonth: string;
  currentYear: string;
  currentLang: LgsName;

  sumEthanolPerDay: number;
  sumEthanolPerMonth: number;
  sumEthanolPerYear: number;

  sumVodkaPerDay: number;
  sumVodkaPerMonth: number;
  sumVodkaPerYear: number;

  volumeDrank: number;
  percent: number;

  yearData: MonthData[];
};

export type StateKeys = keyof AlcoState;

export type Language = {
  currentYear: string;
  currentMonth: string;
  sumVodkaPerMonth: string;
  sumEthanolPerMonth: string;
  sumVodkaPerYear: string;
  sumEthanolPerYear: string;
};

export type Langs = keyof Language;

export type AlcoActionsType = typeof alcoActions;
export type AlcoActionsKeys = keyof AlcoActionsType;

const { changeYear, clearMonthData } = alcoActions;
export type ActionsChangeData =
  | typeof changeYear
  | typeof clearMonthData;
