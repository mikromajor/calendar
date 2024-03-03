import { AlcoState } from "../../../types/alcoTypes";
import { INIT_DAY } from "../../../constants/alcoConstants";

export const createDayData = (
  state: AlcoState,
  dayData: { totalVodka?: number; totalBill?: number }
) => {
  const { day, month, year } = state.currentDate;
  state.yearData.months[Number(month)].days[Number(day)] = {
    ...INIT_DAY,
    ...dayData,
  };
};
