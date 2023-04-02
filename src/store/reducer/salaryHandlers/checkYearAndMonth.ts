export const checkYearAndMonth = (
  year?: number,
  month?: number
) =>
  year &&
  year >= 2020 &&
  month &&
  month >= 0 &&
  month <= 13;
