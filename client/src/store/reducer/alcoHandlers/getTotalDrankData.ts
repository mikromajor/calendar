import { useAppSelector } from "../../hooks/redux";
import { AlcoState } from "../../../types/alcoTypes";
import { converterStringToNumb } from "./converterStringToNumb";

export const getTotalDrankData = (alcoState: AlcoState) => {
  let totalForDay = 0,
    totalForMonth = 0;
  const { yearData, currentDate } = alcoState;
  const { day, month } = converterStringToNumb(currentDate);
  const d = Number(day);
  const m = Number(month);
  const { months } = yearData;
  if (months?.[Number(month)]) {
    const currentMonth = months[Number(month)];
    totalForMonth = currentMonth.totalVodka;

    if (currentMonth.days?.[Number(day)]) {
      totalForDay =
        currentMonth.days[Number(day)].totalVodka;
    }
  }

  return {
    totalForDay,
    totalForMonth,
    totalForYear: yearData.totalVodka,
  };
};
