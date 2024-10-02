import { useAppSelector } from "store/hooks/redux";
import { AlcoState } from "types/alcoTypes";
import { converterStringToNumb } from "./converterStringToNumb";

export const getTotalDrankData = (alcoState: AlcoState) => {
  let totalForDay = 0,
    totalForMonth = 0;
  const { yearData, currentDate } = alcoState;
  const { day, month } = converterStringToNumb(currentDate);
  const { months } = yearData;
  if (months?.[month]) {
    const currentMonth = months[month];
    totalForMonth = currentMonth.totalVodka;

    if (currentMonth.days?.[day]) {
      totalForDay = currentMonth.days[day].totalVodka;
    }
  }

  return {
    totalForDay,
    totalForMonth,
    totalForYear: yearData.totalVodka,
  };
};
