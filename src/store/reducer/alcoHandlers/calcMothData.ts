import {
  AlcoState,
  AdditiveDayData,
} from "../../../types/alcoTypes";
import { INIT_MONTH } from "../../../constants/alcoConstants";

export const calcMonthData = (
  state: AlcoState,
  additiveDayData: AdditiveDayData
) => {
  const { month } = state.currentDate;
  const { additiveVodka, additiveBill } = additiveDayData;
  // create month data if it does not exist
  if (!state.yearData.months?.[Number(month)]) {
    state.yearData.months[Number(month)] = {
      ...INIT_MONTH,
    };
  }
  // update month Data
  const monthNeedUpdate =
    state.yearData.months[Number(month)];
  !!additiveVodka &&
    (monthNeedUpdate.totalVodka += additiveVodka);
  !!additiveBill &&
    (monthNeedUpdate.totalBill += additiveBill);
};
