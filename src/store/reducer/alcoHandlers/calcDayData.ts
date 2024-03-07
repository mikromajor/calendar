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
  const d = Number(day);
  const m = Number(month);
  const months = state.yearData.months;

  // create monthData
  if (typeof months[m] !== "object") {
    months[m] = { ...INIT_MONTH };
  }
  // create dayData
  if (typeof months[m].days[d] !== "object") {
    months[m].days[d] = { ...INIT_DAY };
  }
  if (
    typeof months[m] === "object" &&
    typeof months[m].days[d] === "object"
  ) {
    months[m].totalVodka += additiveVodka;
    months[m].days[d].totalVodka += additiveVodka;
  }
};
