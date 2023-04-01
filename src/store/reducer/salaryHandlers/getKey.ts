export const getKey = (year?: number, month?: number) => {
  let key = "salaryForTheDate_";

  return (key += year && month ? "" + year + month : "");
};
