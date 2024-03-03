import { AlcoState } from "../../../types/alcoTypes";
import {
  INIT_DAY,
  INIT_MONTH,
} from "../../../constants/alcoConstants";
import { createDayData } from "./createDayData";

export const calcMonthData = (
  state: AlcoState,
  dayData: { newVodka?: number; newBill?: number }
) => {
  const { day, month } = state.currentDate;
  const { newVodka, newBill } = dayData;
  // if month data exist
  if (state.yearData.months?.[Number(month)]) {
    !!newVodka &&
      (state.yearData.months[Number(month)].totalVodka +=
        newVodka);

    !!newBill &&
      (state.yearData.months[Number(month)].totalBill +=
        newBill);
  }
  // if month data does not exist
  if (!state.yearData.months?.[Number(month)]) {
    !!newVodka &&
      (state.yearData.months[Number(month)] = {
        ...INIT_MONTH,
        totalVodka: newVodka,
      });

    !!newBill &&
      (state.yearData.months[Number(month)] = {
        ...INIT_MONTH,
        totalBill: newBill,
      });
  }
  createDayData(state, dayData);
};
