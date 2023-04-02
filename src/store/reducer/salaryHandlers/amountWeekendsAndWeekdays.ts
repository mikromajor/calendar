import {
  getCurrentDate,
  daysInMonth,
  dayOfWeek,
  checkYearAndMonth,
} from "./";

export const amountWeekendsAndWeekdays = (
  year?: number,
  month?: number
) => {
  let weekends = 0,
    weekdays,
    iterDay;

  if (
    !(
      year &&
      year >= 2020 &&
      month &&
      month >= 0 &&
      month <= 13
    )
  ) {
    const { currentYear, currentMonth } = getCurrentDate();
    year = currentYear;
    month = currentMonth;
  }

  const amountDaysInMonth = daysInMonth(year, month);

  for (let i = 1; i <= amountDaysInMonth; i++) {
    iterDay = dayOfWeek(year, month, i);
    if (iterDay === 0 || iterDay === 6) weekends++;
  }
  weekdays = amountDaysInMonth - weekends;
  return { weekends, weekdays, year, month };
};
