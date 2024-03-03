import {
  AlcoState,
  Language,
  Total,
  Month,
  Year,
} from "../types/alcoTypes";

//new Date(year, monthIndex, day)
const currentDay = new Date().getDate().toString();
const currentYear = new Date().getFullYear().toString();
const currentMonth = new Date().getMonth().toString();

//created new structure for keeping year data
const INIT_DAY: Total = {
  totalVodka: 0,
  totalBill: 0,
};
const INIT_MONTH: Month = {
  totalVodka: 0,
  totalBill: 0,
  days: [INIT_DAY],
};
const INIT_YEAR: Year = {
  totalVodka: 0,
  totalBill: 0,
  months: [INIT_MONTH],
};

export const INIT_ALCO_STATE: AlcoState = {
  currentDay,
  currentMonth,
  currentYear,
  currentLang: "UA",
  totalVodka: 0,
  totalBill: 0,
  yearData: INIT_YEAR,
};

export const ALCO_CONTENT = {
  PL: {
    alcoHeader: "Licznik spożycia alkoholu",
    controlPanelHeader: "Wprowadź dane wypitego napoju",
    lblLang: "Zmień język",
    lblDay: "Wybierz dzień",
    lblMonth: "Wybierz miesiąc",
    lblYear: "Wybierz rok",
    lblVolume: "Objętość wypitego płynu, ml",
    lblPercent: "Procent wypitego, %",
    btnAdd: "Dodaj",
    btnShowAlcoCalendar: "Kalendarz",
    caption: "Suma spożytego alkoholu",
    currentYear: "Rok",
    currentMonth: "Miesiąc",
    currentDay: "Dzień",
    sumVodkaPerDay:
      '"Objętość spożytej wódki za dzień, ml"',
    sumVodkaPerMonth:
      "Objętość spożytej wódki za miesiąc, ml",
    sumVodkaPerYear:
      "Objętość spożytej wódki za ten rok, ml ",
    deleteYear: "Usunąć dane za wprowadzony rok",
    deleteMonth: "Usunąć dane za wprowadzony miesiąc",
    changeCalcBtn: "Zmień kalkulator",
  },
  EN: {
    alcoHeader: "Alcohol consumption counter ",
    controlPanelHeader: "Enter the drink consumed",
    lblLang: "Change language:",
    lblDay: "Select day",
    lblMonth: "Select month",
    lblYear: "Select year",
    lblVolume: "Volume drunks, ml",
    lblPercent: "Percent, %",
    btnAdd: "Add",
    btnShowAlcoCalendar: "Calendar",
    caption: "Total vodka drunk",
    currentYear: "Year",
    currentMonth: "Month",
    currentDay: "Day",
    sumVodkaPerDay: "Summary drunk vodka per day, ml",
    sumVodkaPerMonth: "Summary drunk vodka per month, ml",
    sumVodkaPerYear: "Summary drunk vodka per year, ml",
    deleteYear: "Delete data for the entered year",
    deleteMonth: "Delete data for the entered month",
    changeCalcBtn: "Change calculator",
  },
  UA: {
    alcoHeader: "Лічильник споживання алкоголю",
    controlPanelHeader: "Введіть спожитий напій",
    lblLang: "Мова",
    lblDay: "День",
    lblMonth: "Місяць",
    lblYear: "Рік",
    lblVolume: "Об'єм випитого, мл",
    lblPercent: "Процент випитого, %",
    btnAdd: "Додати",
    btnShowAlcoCalendar: "Календар",
    caption: "Сумарно випито алкоголю",
    currentYear: "Рік",
    currentMonth: "Місяць",
    currentDay: "День",
    sumVodkaPerDay: "Об'єм випитої горілки за день, мл",
    sumVodkaPerMonth: "Об'єм випитої горілки за місяць, мл",
    sumVodkaPerYear: "Об'єм випитої горілки за рік, мл",
    deleteYear: "Видалити дані за введений рік",
    deleteMonth: "Видалити дані за введений місяць",
    changeCalcBtn: "Зміни калькулятор",
  },
};

export const NAMES_OF_LANGS = Object.keys(
  ALCO_CONTENT
) as Language[];
