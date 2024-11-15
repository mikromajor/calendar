const calcVacationCoef = (pastThreeSalaries) => {
  return (
    Math.round(
      pastThreeSalaries.reduce(
        (accumulator, pastSalary) =>
          accumulator +
          pastSalary.totalSalary /
            (pastSalary.weekDays +
              pastSalary.bloodDonation +
              pastSalary.sickLeaveWeekDays +
              pastSalary.usedVacation),
        0
      ) * 100
    ) / 100
  );
};
module.exports = { calcVacationCoef };
