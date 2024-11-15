const createCurrentSalaryId = (reqUserId, salaryInputs) => {
  const { year, month } = salaryInputs;
  const userId = Number(reqUserId);
  const salaryId = reqUserId + "_" + year + "_" + month;
  return { userId, salaryId };
};

const createArrLastThreeSalaryId = (id, year, month) => {
  //Create 3 last salaries before current month,
  year = Number(year);
  month = Number(month);

  let oneMonthAgoId = "";
  let twoMonthAgoId = "";
  let threeMonthAgoId = "";

  if (month >= 4) {
    oneMonthAgoId = id + "_" + year + "_" + (month - 1);
    twoMonthAgoId = id + "_" + year + "_" + (month - 2);
    threeMonthAgoId = id + "_" + year + "_" + (month - 3);
  }

  if (month === 3) {
    oneMonthAgoId = id + "_" + year + "_" + (month - 1);
    twoMonthAgoId = id + "_" + year + "_" + (month - 2);
    threeMonthAgoId = id + "_" + (year - 1) + "_" + "12";
  }
  if (month === 2) {
    oneMonthAgoId = id + "_" + year + "_" + (month - 1);
    twoMonthAgoId = id + "_" + (year - 1) + "_" + "12";
    threeMonthAgoId = id + "_" + (year - 1) + "_" + "11";
  }
  if (month === 1) {
    oneMonthAgoId = id + "_" + (year - 1) + "_" + "12";
    twoMonthAgoId = id + "_" + (year - 1) + "_" + "11";
    threeMonthAgoId = id + "_" + (year - 1) + "_" + "10";
  }

  return [oneMonthAgoId, twoMonthAgoId, threeMonthAgoId];
};
module.exports = {
  createArrLastThreeSalaryId,
  createCurrentSalaryId,
};
