import { ALCO_CONTENT_LABELS } from "../constants/alcoConstants";
import { alcoActions } from "../store/reducer/alcoReducer";
import { AppLanguages } from "../types/appTypes";

export interface DayInfo {
  totalVodka: number;
  totalBill: number;
}

export interface MonthInfo extends DayInfo {
  days: DayInfo[];
}

export interface YearInfo extends DayInfo {
  months: MonthInfo[];
}

interface CurrentDate {
  day: string;
  month: string;
  year: string;
}

export interface AlcoState {
  currentDate: CurrentDate;
  yearData: YearInfo;
}

export type StateKeys = keyof AlcoState;

export type AlcoActionsType = typeof alcoActions;
export type AlcoActionsKeys = keyof AlcoActionsType;

const { changeYear, clearMonthData } = alcoActions;

export type ActionsChangeData =
  | typeof changeYear
  | typeof clearMonthData;

export interface AdditiveDayData {
  additiveVodka?: number;
  additiveBill?: number;
}
export type AlcoContentLabels = typeof ALCO_CONTENT_LABELS;

type AutoType<K extends string, O> = {
  [keys in K]: O;
};

export type AlcoContentType = AutoType<
  AppLanguages,
  AlcoContentLabels
>;
