export const getKey = (year?: number, month = 1) => {
  let key = "salaryForTheYear_";

  return (key += year ? year + "_Month_" + month : "");
};
