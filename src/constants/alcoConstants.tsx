import {
  AlcoState,
  Langs,
  LgsName,
} from "../types/alcoTypes";

export const INIT_MONTH_DATA = {
  month: "1",
  sumEthanolPerMonth: 0,
  sumVodkaPerMonth: 0,
};

const currentYear = new Date().getFullYear().toString();
const currentMonth = new Date().getMonth().toString();

export const INIT_ALCO_STATE: AlcoState = {
  currentYear: currentYear,
  currentMonth: currentMonth,
  currentLang: "UA",

  sumEthanolPerYear: 0,
  sumEthanolPerMonth: 0,

  sumVodkaPerMonth: 0,
  sumVodkaPerYear: 0,

  volumeDrank: 0,
  percent: 5,

  monthsData: [],
};

export const DISPLAY_LINE: Langs[] = [
  "currentYear",
  "currentMonth",
  "sumVodkaPerMonth",
  "sumVodkaPerYear",
  "sumEthanolPerMonth",
  "sumEthanolPerYear",
];

export const ALCO_CONTENT = {
  PL: {
    alcoHeader: "Licznik spożycia alkoholu",
    controlPanelHeader: "Wprowadź dane wypitego napoju",
    lblLang: "Zmień język",
    lblMonth: "Wybierz miesiąc",
    lblYear: "Wybierz rok",
    lblVolume: "Objętość wypitego płynu, ml",
    lblPercent: "Procent wypitego, %",
    btnAdd: "Dodaj",
    btnShowAlcoCalendar: "Kalendarz",
    caption: "Suma spożytego alkoholu",
    currentYear: "Rok",
    currentMonth: "Miesiąc",
    sumVodkaPerMonth:
      "Objętość spożytej wódki za miesiąc, ml",
    sumEthanolPerMonth:
      "Objętość spożytego spirytusu za miesiąc, ml",
    sumVodkaPerYear:
      "Objętość spożytej wódki za ten rok, ml ",
    sumEthanolPerYear:
      "Objętość spożytego spirytusu za ten rok, ml",
    deleteYear: "Usunąć dane za wprowadzony rok",
    deleteMonth: "Usunąć dane za wprowadzony miesiąc",
    changeCalcBtn: "Zmień kalkulator",
  },
  EN: {
    alcoHeader: "Alcohol consumption counter ",
    controlPanelHeader: "Enter the drink consumed",
    lblLang: "Change language:",
    lblMonth: "Select month",
    lblYear: "Select year",
    lblVolume: "Volume drunks, ml",
    lblPercent: "Percent, %",
    btnAdd: "Add",
    btnShowAlcoCalendar: "Calendar",
    caption: "Total vodka drunk",
    currentYear: "Year",
    currentMonth: "Month",
    sumVodkaPerMonth: "Summary drunk vodka per month, ml",
    sumEthanolPerMonth:
      "Summary drunk ethanol per month, ml",
    sumVodkaPerYear: "Summary drunk vodka per year, ml",
    sumEthanolPerYear: "Summary drunk ethanol per year, ml",
    deleteYear: "Delete data for the entered year",
    deleteMonth: "Delete data for the entered month",
    changeCalcBtn: "Change calculator",
  },
  UA: {
    alcoHeader: "Лічильник споживання алкоголю",
    controlPanelHeader: "Введіть спожитий напій",
    lblLang: "Оберіть мову",
    lblMonth: "Виберіть місяць",
    lblYear: "Виберіть рік",
    lblVolume: "Об'єм випитого, мл",
    lblPercent: "Процент випитого, %",
    btnAdd: "Додати",
    btnShowAlcoCalendar: "Kалендар",
    caption: "Сумарно випито алкоголю",
    currentYear: "Рік",
    currentMonth: "Місяць",
    sumVodkaPerMonth: "Об'єм випитої горілки за місяць, мл",
    sumEthanolPerMonth:
      "Об'єм випитого спирту за місяць, мл",
    sumVodkaPerYear: "Об'єм випитої горілки за рік, мл",
    sumEthanolPerYear: "Об'єм випитого спирту за рік, мл",
    deleteYear: "Видалити дані за введений рік",
    deleteMonth: "Видалити дані за введений місяць",
    changeCalcBtn: "Зміни калькулятор",
  },
};

export const NAMES_OF_LANGS = Object.keys(
  ALCO_CONTENT
) as LgsName[];
