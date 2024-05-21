export const checkMinMaxAmountDaysInCurrentMonth = (
  day: number,
  month: number,
  year: number
): boolean => {
  let isDayValid = false;
  let isLeapYear = year % 4 === 0;

  if (day <= 0 || month > 12 || month <= 0) {
    return false;
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      isDayValid = day <= 31 ? true : false;
      break;
    case 2:
      if (isLeapYear) {
        isDayValid = day <= 29 ? true : false;
      } else {
        isDayValid = day <= 28 ? true : false;
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      isDayValid = day <= 30 ? true : false;
      break;
  }
  return isDayValid;
};
