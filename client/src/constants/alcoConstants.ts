import {
  AlcoState,
  DayInfo,
  MonthInfo,
  AlcoYear,
  AlcoContent,
} from "../types/alcoTypes";
import { getDateMonthYear } from "../utils";
import { UserLanguages } from "../types/userTypes";
import SERVICE_INIT from "./serviceConstants";

//for calendar: new Date(year, monthIndex(0-11), day)
const [currentDay, currentMonth, currentYear] =
  getDateMonthYear(new Date());

export const CURRENT_DATE = {
  day: currentDay,
  month: currentMonth,
  year: currentYear,
};

export const INIT_DAY: DayInfo = {
  totalVodka: 0,
  totalBill: 0,
};
export const INIT_MONTH: MonthInfo = {
  totalVodka: 0,
  totalBill: 0,
  days: [], // 1-31 days info
};

export const INIT_ALCO_YEAR: AlcoYear = {
  totalVodka: 0,
  totalBill: 0,
  months: [], // 1-12 months info
};

export const INIT_ALCO_STATE: AlcoState = {
  currentDate: CURRENT_DATE,
  yearData: INIT_ALCO_YEAR,
};

export const ALCO_CONTENT: AlcoContent = {
  [UserLanguages.PL]: {
    alcoHeader: "Alcokalendarz",
    controlPanelHeader: "Wprowadź dane napoju",
    lblDay: "Dzień",
    lblMonth: "Miesiąc",
    lblYear: "Rok",
    lblVolume: "Objętość płynu, ml",
    lblPercent: "Zawartość alkoholu, %",
    btnAdd: "Dodaj",
    btnShowAlcoCalendar: "Pokazywać kalendarz",
    caption: "Sumarycznie spożyto wódki",
    deleteYear: "Usunąć dane za rok",
    deleteMonth: "Usunąć dane za miesiąc",
  },
  [UserLanguages.EN]: {
    alcoHeader: "Аlcohol calendar",
    controlPanelHeader: "Enter the drink consumed",
    lblDay: "Day",
    lblMonth: "MonthInfo",
    lblYear: "Year",
    lblVolume: "Volume liquid, ml",
    lblPercent: "Alcohol content, %",
    btnAdd: "Add",
    btnShowAlcoCalendar: "Show calendar",
    caption: "Total vodka drunk",
    deleteYear: "Delete year's data",
    deleteMonth: "Delete month's data",
  },
  [UserLanguages.UA]: {
    alcoHeader: "Алкокалендар",
    controlPanelHeader: "Введіть спожитий напій",
    lblDay: "День",
    lblMonth: "Місяць",
    lblYear: "Рік",
    lblVolume: "Об'єм рідини, мл",
    lblPercent: "Вміст алкоголю, %",
    btnAdd: "Додати",
    btnShowAlcoCalendar: "Показувати календар",
    caption: "Сумарно випито горілки",
    deleteYear: "Видалити дані за рік",
    deleteMonth: "Видалити дані за місяць",
  },
};

//---response_model-----|

// const d = {
//   totalBill: 0,
//   id: "2024_9_2",
//   monthId: "2024_9",
//   yearId: "2024",
//   totalVodka: 126,
//   updatedAt: "2024-07-14T10:13:04.789Z",
//   createdAt: "2024-07-14T10:13:04.789Z",
// };

// const m = {
//   id: "2024_9",
//   totalVodka: 882,
//   totalBill: 0,
//   createdAt: "2024-07-14T09:47:42.575Z",
//   updatedAt: "2024-07-14T10:13:04.781Z",
//   days: [d],
// };
// const respons = {
//   id: "2024",
//   totalVodka: 2268,
//   totalBill: 0,
//   createdAt: "2024-07-14T09:35:29.269Z",
//   updatedAt: "2024-07-14T10:13:04.761Z",
//   months: [m],
// };
