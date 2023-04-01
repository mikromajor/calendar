export const getCurrentDate = () => {
  const fullDate = new Date();

  const today = fullDate.getDay(); //0-6
  const currentMonth = fullDate.getMonth(); //0-11
  const currentYear = fullDate.getFullYear();

  return { currentYear, currentMonth, today };
};
