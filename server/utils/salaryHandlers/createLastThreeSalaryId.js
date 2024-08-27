const createLastThreeSalaryId = (id, year, month) => {
  //Create 3 last salaries before current month
  //It's need for calculate vacation
  const userId = Number(id);
  let oneMonthAgoId =
    id + "_" + year + "_" + (Number(month) - 1);
  let twoMonthAgoId =
    id + "_" + year + "_" + (Number(month) - 2);
  let threeMonthAgoId =
    id + "_" + year + "_" + (Number(month) - 3);
  if (month === "1") {
    oneMonthAgoId =
      id + "_" + (Number(year) - 1) + "_" + "12";
    twoMonthAgoId =
      id + "_" + (Number(year) - 1) + "_" + "11";
    threeMonthAgoId =
      id + "_" + (Number(year) - 1) + "_" + "10";
  }
  if (month === "2") {
    twoMonthAgoId =
      id + "_" + (Number(year) - 1) + "_" + "12";
    threeMonthAgoId =
      id + "_" + (Number(year) - 1) + "_" + "11";
  }
  return { oneMonthAgoId, twoMonthAgoId, threeMonthAgoId };
};
module.exports = { createLastThreeSalaryId };
