export const isNum = (n: number | undefined): n is number =>
  typeof n === "number" ? true : false;
