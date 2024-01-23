export const trimFirstZero = (str: string) =>
  str[0] === "0" && str[1] !== "," ? str.slice(1) : str;

//todo
// fix   000,123 => 0,123   use RegExp
// 000123 => 123
