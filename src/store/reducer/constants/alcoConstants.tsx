import {
  AlcoState,
  KeysLang,
  LgsName,
} from "../types/alcoTypes";

export const INIT_MONTH_DATA = {
  month: "1",
  sumEthanolPerMonth: 0,
  sumVodkaPerMonth: 0,
};

export const INIT_ALCO_STATE: AlcoState = {
  currentYear: "2023",
  currentMonth: "1",

  sumEthanolPerYear: 0,
  sumEthanolPerMonth: 0,

  sumVodkaPerMonth: 0,
  sumVodkaPerYear: 0,

  volumeDrunks: 0,
  percentDrunk: 5,

  currentIndex: 1,
  monthsData: [INIT_MONTH_DATA],

  currentLang: "en",
};

export const DISPLAY_LINE: KeysLang[] = [
  "currentYear",
  "currentMonth",
  "sumVodkaPerMonth",
  "sumEthanolPerMonth",
  "sumVodkaPerYear",
  "sumEthanolPerYear",
];

export const LANGS = {
  pln: {
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
  en: {
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
  ua: {
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

const ALL_LANGS: LgsName[] = [];
for (let objLg of Object.keys(LANGS)) {
  ALL_LANGS.push(objLg as LgsName);
}
export { ALL_LANGS };
