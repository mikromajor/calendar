import {
  AlcoState,
  AdditiveDayData,
} from "../../../types/alcoTypes";
import { INIT_DAY } from "../../../constants/alcoConstants";

export const calcDayData = (
  state: AlcoState,
  additiveDayData: AdditiveDayData
) => {
  const { additiveVodka, additiveBill } = additiveDayData;
  const { day, month } = state.currentDate;

  // create dayData if it does not exist
  if (
    !state.yearData.months[Number(month)].days[Number(day)]
  ) {
    state.yearData.months[Number(month)].days[Number(day)] =
      { ...INIT_DAY };
  }
  //now dayData is exist, so update it
  const dayNeedUpdate =
    state.yearData.months[Number(month)].days[Number(day)];

  !!additiveVodka &&
    (dayNeedUpdate.totalVodka += additiveVodka);
  !!additiveBill &&
    (dayNeedUpdate.totalBill += additiveBill);
};
