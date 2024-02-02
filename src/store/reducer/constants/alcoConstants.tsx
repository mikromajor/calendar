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

export const INIT_ALCO_STATE: AlcoState = {
  currentYear: currentYear,
  currentMonth: "1",

  sumEthanolPerYear: 0,
  sumEthanolPerMonth: 0,

  sumVodkaPerMonth: 0,
  sumVodkaPerYear: 0,

  volumeDrank: 0,
  percent: 5,

  currentIndex: 1,
  monthsData: [INIT_MONTH_DATA],

  currentLang: "EN",
};

export const DISPLAY_LINE: Langs[] = [
  "currentYear",
  "currentMonth",
  "sumVodkaPerMonth",
  "sumEthanolPerMonth",
  "sumVodkaPerYear",
  "sumEthanolPerYear",
];

export const ALCO_CONTENT = {
  PL: {
    alcoHeader: "Licznik spożycia alkoholu",
    controlPanelHeader: "Wprowadź dane",
    lblLang: "Zmień jęnzyk",
    lblMonth: "Wybierz miesiąc",
    lblYear: "Wybierz rok",
    lblVolume: "Ilość wypitego płynu, ml",
    lblPercent: "Procent wypitego, %",
    btnAdd: " Dodaj",
    caption: "Wypito w przeliczeniu",
    currentYear: "Rok",
    currentMonth: "Miesiąc",
    sumVodkaPerMonth: "Ilość spożytej wódki za miesiąc, ml",
    sumEthanolPerMonth:
      "Ilość spożytego spirytusu za miesiąc, ml",
    sumVodkaPerYear: "Ilość spożytej wódki za ten rok, ml ",
    sumEthanolPerYear:
      " Ilość sporzytego spirytusu za ten rok, ml",
  },
  EN: {
    alcoHeader: "Alcohol consumption counter ",
    controlPanelHeader: "Enter the data",
    lblLang: "Change language:",
    lblMonth: "Select month",
    lblYear: "Select year",
    lblVolume: "Volume drunks, ml",
    lblPercent: "Percent, %",
    btnAdd: "Add",
    caption: "Total drunk",
    currentYear: "Current year",
    currentMonth: "Current month",
    sumVodkaPerMonth: "Summary drunk vodka per month, ml",
    sumEthanolPerMonth:
      "Summary drunk ethanol per month, ml",
    sumVodkaPerYear: "Summary drunk vodka per year, ml",
    sumEthanolPerYear: "Summary drunk ethanol per year, ml",
  },
  UA: {
    alcoHeader: "Лічильник споживання алкоголю",
    controlPanelHeader: "Введіть дані",
    lblLang: "Оберіть мову",
    lblMonth: "Виберіть місяць",
    lblYear: "Виберіть рік",
    lblVolume: "Об'єм випитого, мл",
    lblPercent: "Процент випитого, %",
    btnAdd: "Додати",
    caption: "Випито в перерахунку",
    currentYear: "Поточний рік",
    currentMonth: "Поточний місяць",
    sumVodkaPerMonth:
      "Кількість випитої горілки за місяць, мл",
    sumEthanolPerMonth:
      "Кількість випитого спирту за місяць, мл",
    sumVodkaPerYear: "Кількість випитої горілки за рік, мл",
    sumEthanolPerYear:
      "Кількість випитого спирту за рік, мл",
  },
};

export const ALL_ALCO_CONTENT = Object.keys(
  ALCO_CONTENT
) as LgsName[];
