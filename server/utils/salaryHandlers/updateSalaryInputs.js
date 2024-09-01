const { Salary } = require("../../models/models");
const ApiError = require("../../error/ApiError");
const {
  SALARY_INIT,
} = require("../../constants/initStates");
const { createCurrentSalaryId } = require("./.");

const updateSalaryInputs = async (salaryInputs) => {
  const userId = Number(salaryId.split("_")[0]);
  try {
    let salary = await Salary.findOne({
      where: { id: salaryId },
    });
    if (salary) {
      Object.assign(salary, salaryInputs);
      await salary.save();
    } else {
      salary = await Salary.create({
        ...SALARY_INIT,
        ...salaryInputs,
        userId,
        id: salaryId,
      });
    }
    return salary;
  } catch (e) {
    next(
      ApiError.internal(
        `Salary with id=${salaryId}, was not update. Details:` +
          e
      )
    );
  }
};

module.exports = { updateSalaryInputs };
