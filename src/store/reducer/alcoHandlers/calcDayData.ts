import {
  AlcoState,
  AdditiveDayData,
} from "../../../types/alcoTypes";
import {
  INIT_MONTH,
  INIT_DAY,
} from "../../../constants/alcoConstants";

export const calcDayData = (
  state: AlcoState,
  additiveVodka: number
) => {
  const { day, month } = state.currentDate;
  let d = Number(day);
  let m = Number(month);
  const months = state.yearData.months;

  // create monthData
  if (!months[m]) {
    months[m] = { ...INIT_MONTH, days: [] };
  }
  // create dayData
  if (!months[m].days[d]) {
    months[m].days[d] = { ...INIT_DAY };
  }
  if (!!months[m] && !!months[m].days[d]) {
    months[m].totalVodka += additiveVodka;
    months[m].days[d].totalVodka += additiveVodka;
  }
};
