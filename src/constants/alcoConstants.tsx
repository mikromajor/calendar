import {
  AlcoState,
  DayInfo,
  MonthInfo,
  YearInfo,
  AlcoContent,
} from "../types/alcoTypes";
import { getDateMonthYear } from "../components/handlers";
import { AppLanguages } from "../types/appTypes";

//for calendar: new Date(year, monthIndex(0-11), day)
const [currentDay, currentMonth, currentYear] =
  getDateMonthYear(new Date());

const CURRENT_DATE = {
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
  days: [], // 1-31 days info (exist validation max  days in a month)
};
export const INIT_YEAR: YearInfo = {
  totalVodka: 0,
  totalBill: 0,
  months: [], // 1-12 months info
};

export const INIT_ALCO_STATE: AlcoState = {
  currentDate: CURRENT_DATE,
  yearData: INIT_YEAR,
};

export const ALCO_CONTENT: AlcoContent = {
  [AppLanguages.PL]: {
    alcoHeader: "Licznik spożycia alkoholu",
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
  [AppLanguages.EN]: {
    alcoHeader: "Alcohol consumption counter ",
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
  [AppLanguages.UA]: {
    alcoHeader: "Лічильник споживання алкоголю",
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

//created new structure for keeping year data
//TODO replace object INIT_DAY to class INIT_DAY...
// туфта с конструкторами - продумай
// class CLASS_DAY{
//   totalVodka=0;
//   totalBill=0;
//   constructor(additionVodka:number=0,additionBill: number=0){
//     this.totalVodka += additionVodka;
//     this.totalBill += additionBill;
//   }
// }

// class CLASS_MONTH extends CLASS_DAY{
// days: DayInfo[] =[];
// constructor(day: DayInfo, i:number){
// super(day.totalVodka, day.totalBill);
// this.days[i] = day;
// }
// }

// class CLASS_YEAR extends CLASS_DAY{
//   months: MonthInfo[]=[];
//   constructor(month: MonthInfo, indexMonth:number){
//     super();
//   }

// }

//--------|
