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

  volumeDrunks: 0,
  percentDrunk: 5,

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
    lblLang: "Zmień jęnzyk",
    lblMonth: "Wybierz miesiąc",
    lblYear: "Wybierz rok",
    lblVolume: "Ilość wypitego",
    lblPercent: "Procent wypitego",
    btnAdd: " Dodaj",
    caption: "Wypito w przeliczeniu",
    currentYear: "Potoczny rok",
    currentMonth: "Potoczny miesiąc",
    sumVodkaPerMonth: "Iloćś sporzytej wódki za mieśąc",
    sumEthanolPerMonth:
      "Iloćś sporzytego spirytusu za mieśąc",
    sumVodkaPerYear: " Iloćś sporzytej wódki za rok",
    sumEthanolPerYear: " Iloćś sporzytego spirytusu za rok",
  },
  EN: {
    lblLang: "Change language:",
    lblMonth: "Select month",
    lblYear: "Select year",
    lblVolume: "Volume drunks",
    lblPercent: "Percent",
    btnAdd: "Add",
    caption: "Total drunk",
    currentYear: "Current year",
    currentMonth: "Current month",
    sumVodkaPerMonth: "Summary drunk vodka per month",
    sumEthanolPerMonth: "Summary drunk ethanol per month",
    sumVodkaPerYear: "Summary drunk vodka per year",
    sumEthanolPerYear: "Summary drunk ethanol per year",
  },
  UA: {
    lblLang: "Оберіть мову",
    lblMonth: "Виберіть місяць",
    lblYear: "Виберіть рік",
    lblVolume: "Об'єм випитого",
    lblPercent: "Процент випитого",
    btnAdd: "Додати",
    caption: "Випито в перерахунку",
    currentYear: "Поточний рік",
    currentMonth: "Поточний місяць",
    sumVodkaPerMonth: "Кількість випитої горілки за місяць",
    sumEthanolPerMonth:
      "Кількість випитого спирту за місяць",
    sumVodkaPerYear: "Кількість випитої горілки за рік",
    sumEthanolPerYear: "Кількість випитого спирту за рік",
  },
};

export const ALL_ALCO_CONTENT = Object.keys(
  ALCO_CONTENT
) as LgsName[];
