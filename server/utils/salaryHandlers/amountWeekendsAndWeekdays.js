const dayOfWeek = (y, m, d) =>
  new Date(y, m - 1, d).getDay();

const daysInMonth = (y, m) => new Date(y, m, 0).getDate();

export const amountWeekendsAndWeekdays = (year, month) => {
  let weekends = 0,
    weekdays,
    iterDay;

  const amountDaysInMonth = daysInMonth(year, month);

  for (let i = 1; i <= amountDaysInMonth; i++) {
    iterDay = dayOfWeek(year, month, i);
    if (iterDay === 0 || iterDay === 6) weekends++;
  }
  weekdays = amountDaysInMonth - weekends;
  return { weekends, weekdays };
};

module.exports = { amountWeekendsAndWeekdays };
