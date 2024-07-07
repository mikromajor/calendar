export const dayOfWeek = (
  y: number,
  m: number,
  d: number
) => new Date(y, m - 1, d).getDay();

// return 0-6
// 0-sunday
// 1-monday
//...
//6-saturday
