export const getCurrentDate = () => {
  const fullDate = new Date();

  const today = fullDate.getDay(); //0-6
  const currentMonth = fullDate.getMonth() + 1; //1-12
  const currentYear = fullDate.getFullYear();

  return { currentYear, currentMonth, today };
};
