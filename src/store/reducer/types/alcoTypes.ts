import {
  INIT_ALCO_STATE,
  ALCO_CONTENT,
  INIT_MONTH_DATA,
} from "../constants/alcoConstants";

type MonthData = typeof INIT_MONTH_DATA;
export type LgsName = keyof typeof ALCO_CONTENT;

export type AlcoState = {
  currentYear: string;
  currentMonth: string;

  sumEthanolPerYear: number;
  sumEthanolPerMonth: number;

  sumVodkaPerMonth: number;
  sumVodkaPerYear: number;

  volumeDrank: number;
  percent: number;

  currentIndex: number;
  monthsData: MonthData[];

  currentLang: LgsName;
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
