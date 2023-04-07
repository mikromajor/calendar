export const dayOfWeek = (
  y: number,
  m: number,
  d: number
) => new Date(y, m - 1, d).getDay();
