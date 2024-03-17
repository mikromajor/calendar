export const getDateMonthYear = (date: Date) => {
  const newDay = date.getDate() + "";
  const newMonth = date.getMonth() + 1 + "";
  const newYear = date.getFullYear() + "";
  return [newDay, newMonth, newYear];
};
