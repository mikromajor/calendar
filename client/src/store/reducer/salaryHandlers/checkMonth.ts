import { isNum } from ".";
export const checkMonth = (
  month?: number
): month is number =>
  isNum(month) && month > -1 && month < 13;
