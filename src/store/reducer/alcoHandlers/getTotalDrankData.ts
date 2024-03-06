import { useAppSelector } from "../../hooks/redux";

export const getTotalDrankData = () => {
  let totalForDay = 0,
    totalForMonth = 0;
  const { yearData, currentDate } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month } = currentDate;
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
