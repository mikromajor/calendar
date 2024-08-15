import { alcoActions } from "../store/reducer/alcoReducer";
// import { ALCO_CONTENT_LABELS } from "../constants/alcoConstants";
import { AppLanguages } from "./userTypes";

export interface DayInfo {
  totalVodka: number;
  totalBill: number;
}

export interface Service {
  isError: boolean;
  message: string;
  isLoading: boolean;
}

export interface MonthInfo extends DayInfo {
  days: DayInfo[];
}

export interface AlcoYear extends DayInfo {
  months: MonthInfo[];
}

export interface CurrentDate {
  day: string;
  month: string;
  year: string;
}

export interface AlcoState {
  currentDate: CurrentDate;
  yearData: AlcoYear;
  service: Service;
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

export interface IDose {
  year: string;
  month: string;
  day: string;
  additionVodka: string;
}

export enum ContentKeys {
  alcoHeader = "alcoHeader",
  controlPanelHeader = "controlPanelHeader",
  lblDay = "lblDay",
  lblMonth = "lblMonth",
  lblYear = "lblYear",
  lblVolume = "lblVolume",
  lblPercent = "lblPercent",
  btnAdd = "btnAdd",
  btnShowAlcoCalendar = "btnShowAlcoCalendar",
  caption = "caption",

  deleteYear = "deleteYear",
  deleteMonth = "deleteMonth",
}

type ContentLabels = Record<ContentKeys, string>;

export type AlcoContent = Record<
  AppLanguages,
  ContentLabels
>;

//  example_1:

// export type ContentLabels = typeof ALCO_CONTENT_LABELS;

// type AutoType<K extends string, O> = {
//   [keys in K]: O;
// };

// export type AlcoContentType = AutoType<
//   AppLanguages,
//   ContentLabels
// >;

// type Obj2 = {
//   [k:string]:number
// }
// type Obj1 = Record<string,number>// equivalent to Obj2

//  example_2:

// enum k2{
//   first = 'first',
//  second ='second',
//   third='third'
// }

// type ObjK2 = Record<k2,string>

// const myObj:  ObjK2= {
//   first:'s',
//   second: 'ss',
//   third: 'sss'

// }
