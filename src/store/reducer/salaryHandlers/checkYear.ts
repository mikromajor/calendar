export const checkYear = (year?: number): year is number =>
  !!year && year >= 2020 && year < 2100;
