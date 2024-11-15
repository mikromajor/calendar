const { calcVacationCoef } = require("./calcVacationCoef");
const { getArrSalaries } = require("./getArrSalaries");
const {
  createArrLastThreeSalaryId,
} = require("./idCreators");

const getVacationCoef = async (
  userId,
  year,
  month,
  next
) => {
  const arrThreeId = createArrLastThreeSalaryId(
    userId,
    year,
    month
  );
  const { isAllSalaries, salaries } = await getArrSalaries(
    arrThreeId,
    next
  );

  let vacationCoef = isAllSalaries
    ? calcVacationCoef(salaries)
    : 0;

  return vacationCoef;
};

module.exports = { getVacationCoef };
