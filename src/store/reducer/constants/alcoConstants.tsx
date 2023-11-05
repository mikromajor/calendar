import { AlcoState, KeysLang } from "../types/alcoTypes";

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
    currentYear: "Potoczny rok",
    currentMonth: "Potoczny miesiąc",
    sumVodkaPerMonth: "Iloćś sporzytej wódki za mieśąc",
    sumEthanolPerMonth:
      "Iloćś sporzytego spirytusu za mieśąc",
    sumVodkaPerYear: " Iloćś sporzytej wódki za rok",
    sumEthanolPerYear: " Iloćś sporzytego spirytusu za rok",
  },
  en: {
    currentYear: "Current year",
    currentMonth: "Current month",
    sumVodkaPerMonth: "Summary drunk vodka per month",
    sumEthanolPerMonth: "Summary drunk ethanol per month",
    sumVodkaPerYear: "Summary drunk vodka per year",
    sumEthanolPerYear: "Summary drunk ethanol per year",
  },
  ua: {
    currentYear: "Поточний рік",
    currentMonth: "Поточний місяць",
    sumVodkaPerMonth: "Кількість випитої горілки за місяць",
    sumEthanolPerMonth:
      "Кількість випитого спирту за місяць",
    sumVodkaPerYear: "Кількість випитої горілки за рік",
    sumEthanolPerYear: "Кількість випитого спирту за рік",
  },
};
