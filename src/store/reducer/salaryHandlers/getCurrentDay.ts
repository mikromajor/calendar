export const getCurrentDate = (
  y: number,
  m: number,
  d: number
) => {
  const fullDate = new Date(y, m, d);
  const day = fullDate.getDay(); //0-6
  const month = fullDate.getMonth(); //0-11
  const year = fullDate.getFullYear();
  return { year, month, day };
};
