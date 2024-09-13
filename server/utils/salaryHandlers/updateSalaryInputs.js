const { Salary } = require("../../models/models");
const ApiError = require("../../error/ApiError");
const {
  SALARY_INIT,
} = require("../../constants/initStates");
const { createCurrentSalaryId } = require("./idCreators");

const updateSalaryInputs = async (
  salaryInputs,
  reqUserId,
  next
) => {
  const { userId, salaryId } = createCurrentSalaryId(
    reqUserId,
    salaryInputs
  );
  try {
    let salary = await Salary.findOne({
      where: { id: salaryId },
    });
    if (salary) {
      Object.assign(salary, salaryInputs);
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
