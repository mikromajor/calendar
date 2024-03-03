import { ALCO_CONTENT } from "../constants/alcoConstants";
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
interface CurrentDate {
  day: string;
  month: string;
  year: string;
}
// interface CurrentTotal{
//   totalVodkaPerDay: number;
//   totalVodkaPerMonth: number;
//   totalVodkaPerYear: number;

//   totalBillPerDay: number;
//   totalBillPerMonth: number;
//   totalBillPerYear: number;
// }
export interface AlcoState {
  currentDate: CurrentDate;
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

// type AC = typeof ALCO_CONTENT;
// type AlkoContent<AC>={
//   [K in keyof AC]:AC[K];
// }
// export  interface LanguageLabels{
//     alcoHeader: string;
//     controlPanelHeader:  string;
//     lblLang:  string;
//     lblDay:  string;
//     lblMonth:  string;
//     lblYear:  string;
//     lblVolume:  string;
//     lblPercent: string;
//     btnAdd:  string;
//     btnShowAlcoCalendar: string;
//     caption:  string;
//     currentYear:  string;
//     currentMonth: string;
//     currentDay: string;
//     sumVodkaPerDay:
//        string;
//     sumVodkaPerMonth:
//        string;
//     sumVodkaPerYear:
//        string;
//     deleteYear:  string;
//     deleteMonth:  string;
//     btnChangeCalc:  string;
//   };
