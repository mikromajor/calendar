export const getMaxValidDayInCurrentMonth = (
  day: number,
  month: number,
  year: number
): string => {
  let validDay = 1;
  let isLeapYear = year % 4 === 0;

  if (day <= 0) {
    return "1";
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      validDay = day <= 31 ? day : 31;
      break;
    case 2:
      if (isLeapYear) {
        validDay = day <= 29 ? day : 29;
      } else {
        validDay = day <= 28 ? day : 28;
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      validDay = day <= 30 ? day : 30;
      break;
  }
  return validDay.toString();
};
