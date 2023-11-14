import {
  INIT_ALCO_STATE,
  LANGS,
  INIT_MONTH_DATA,
} from "../constants/alcoConstants";

type MonthData = typeof INIT_MONTH_DATA;
export type AlcoState = {
  currentYear: string;
  currentMonth: string;

  sumEthanolPerYear: number;
  sumEthanolPerMonth: number;

  sumVodkaPerMonth: number;
  sumVodkaPerYear: number;

  volumeDrunks: number;
  percentDrunk: number;

  currentIndex: number;
  monthsData: MonthData[];

  currentLang: "EN" | "PL" | "UA";
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

export type KeysLang = keyof Language;

export type LgsName = keyof typeof LANGS;
