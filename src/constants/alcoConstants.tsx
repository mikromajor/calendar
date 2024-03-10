import {
  AlcoState,
  Total,
  Month,
  Year,
  AlcoContentType,
} from "../types/alcoTypes";
import { getCurrentMonth } from "../store/reducer/alcoHandlers/getCurrentMonth";
import { AppLanguages } from "../types/appTypes";

//for calendar: new Date(year, monthIndex(0-11), day)
const currentDay = new Date().getDate().toString();
const currentYear = new Date().getFullYear().toString();
const currentMonth = getCurrentMonth().toString();
// console.log(currentDay,currentMonth,currentYear)

const CURRENT_DATE = {
  day: currentDay,
  month: currentMonth,
  year: currentYear,
};

//created new structure for keeping year data
export const INIT_DAY: Total = {
  totalVodka: 0,
  totalBill: 0,
};
export const INIT_MONTH: Month = {
  totalVodka: 0,
  totalBill: 0,
  days: [], // 30 days info
};
export const INIT_YEAR: Year = {
  totalVodka: 0,
  totalBill: 0,
  months: [], // 12 months info
};

export const INIT_ALCO_STATE: AlcoState = {
  currentDate: CURRENT_DATE,
  yearData: INIT_YEAR, //12 months info
};

export const ALCO_CONTENT_LABELS = {
  alcoHeader: "alcoHeader",
  controlPanelHeader: "controlPanelHeader",
  AlcoHeader: "AlcoHeader",
  lblDay: "lblDay",
  lblMonth: "lblMonth",
  lblYear: "lblYear",
  lblVolume: "lblVolume",
  lblPercent: "lblPercent",
  btnAdd: "btnAdd",
  btnShowAlcoCalendar: "btnShowAlcoCalendar",
  caption: "caption",
  lblDate: "lblDate",
  totalDrankVodka: "totalDrankVodka",
  deleteYear: "deleteYear",
  deleteMonth: "deleteMonth",
};

export const ALCO_CONTENT = {
  [AppLanguages.PL]: {
    alcoHeader: "Licznik spożycia alkoholu",
    controlPanelHeader: "Wprowadź dane wypitego napoju",
    lblDay: "Dzień",
    lblMonth: "Miesiąc",
    lblYear: "Rok",
    lblVolume: "Objętość wypitego płynu, ml",
    lblPercent: "Procent wypitego, %",
    btnAdd: "Dodaj",
    btnShowAlcoCalendar: "Kalendarz",
    caption: "Suma spożytego alkoholu",
    lblDate: "Data",
    totalDrankVodka: '"Sumarycznie spożyto wódki, ml"',
    deleteYear: "Usunąć dane za wprowadzony rok",
    deleteMonth: "Usunąć dane za wprowadzony miesiąc",
  },
  [AppLanguages.EN]: {
    alcoHeader: "Alcohol consumption counter ",
    controlPanelHeader: "Enter the drink consumed",
    lblDay: "Select day",
    lblMonth: "Select month",
    lblYear: "Select year",
    lblVolume: "Volume drunks, ml",
    lblPercent: "Percent, %",
    btnAdd: "Add",
    btnShowAlcoCalendar: "Calendar",
    caption: "Total vodka drunk",
    lblDate: "Date",
    totalDrankVodka: "Summary drunk vodka, ml",
    deleteYear: "Delete data for the entered year",
    deleteMonth: "Delete data for the entered month",
  },
  [AppLanguages.UA]: {
    alcoHeader: "Лічильник споживання алкоголю",
    controlPanelHeader: "Введіть спожитий напій",
    lblDay: "День",
    lblMonth: "Місяць",
    lblYear: "Рік",
    lblVolume: "Об'єм випитого, мл",
    lblPercent: "Процент випитого, %",
    btnAdd: "Додати",
    btnShowAlcoCalendar: "Календар",
    caption: "Сумарно випито алкоголю",
    lblDate: "Дата",
    totalDrankVodka: "Сумарний об'єм випитої горілки, мл",
    deleteYear: "Видалити дані за введений рік",
    deleteMonth: "Видалити дані за введений місяць",
  },
} as AlcoContentType;
