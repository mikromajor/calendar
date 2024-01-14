export const checkYear = (year?: number): year is number =>
  !!year && year >= 0 && year < 2100;
