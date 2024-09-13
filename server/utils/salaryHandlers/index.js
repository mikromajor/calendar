const { calcSalary } = require("./calcSalary");
const {
  amountWeekendsAndWeekdays,
} = require("./amountWeekendsAndWeekdays");
const { calcVacationCoef } = require("./calcVacationCoef");
const { getArrSalaries } = require("./getArrSalaries");
const {
  createArrLastThreeSalaryId,
  createCurrentSalaryId,
} = require("./idCreators");
const {
  updateSalaryInputs,
} = require("./updateSalaryInputs");
const { getVacationCoef } = require("./getVacationCoef");

module.exports = {
  amountWeekendsAndWeekdays,
  calcSalary,
  calcVacationCoef,
  getArrSalaries,
  createArrLastThreeSalaryId,
  createCurrentSalaryId,
  updateSalaryInputs,
  getVacationCoef,
};
