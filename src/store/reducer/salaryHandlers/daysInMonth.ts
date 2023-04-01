export const daysInMonth = (y: number, m: number) =>
  new Date(y, m - 1, 0).getDate();
