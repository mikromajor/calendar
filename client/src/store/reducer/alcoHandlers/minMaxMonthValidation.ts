export const minMaxMonthValidation = (m: string) => {
  let month = Number(m);
  if (month < 1) {
    month = 1;
  } else if (month > 12) {
    month = 12;
  }
  return month.toString();
};
