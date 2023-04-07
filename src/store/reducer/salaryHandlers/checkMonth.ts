export const checkMonth = (
  month?: number
): month is number => !!month && month >= 0 && month < 13;
