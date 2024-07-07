export const trimFirstZero = (str: string) => {
  const reg_1 = /^[0]+[1-9]+/i;
  const reg_2 = /^[.|,]/i;
  return str.replace(reg_1, "").replace(reg_2, "0.");
};
