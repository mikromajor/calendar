import { AlcoState } from "../../../types/alcoTypes";
import { INIT_DAY } from "../../../constants/alcoConstants";

export const createDayData = (
  state: AlcoState,
  newDayData: { newVodka?: number; newBill?: number }
) => {
  const { day, month } = state.currentDate;
  //TODO  not complete
  const updateDayData = { ...INIT_DAY };

  // if dayData does not exist
  state.yearData.months[Number(month)].days[Number(day)] = {
    ...INIT_DAY,
  };
  //if dayData exist
};
