const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");
const { SALARY_INIT } = require("../constants/initStates");
const {
  calcSalary,
  calcVacationCoef,
  getArrSalaries,
  createArrLastThreeSalaryId,
  createCurrentSalaryId,
  updateSalaryInputs,
  getVacationCoef,
} = require("../utils/salaryHandlers/index");
const {
  convertObjValToNumber,
} = require("../utils/convertObjValToNumber");

// model ServerRes {
//   token: string;
//   message?: string;
//   alcoState?: AlcoState;
//   salaryState?: ISalaryInit;
// }

class SalaryController {
  async getOne(req, res, next) {
    //GET http://localhost:7000/api/salary/getOne?year=2020&month=1
    const { salaryId } = createCurrentSalaryId(
      req.user.id,
      req.query
    );
    try {
      let salary = await Salary.findOne({
        where: { id: salaryId },
      });
      return res.json(salary ? salary : SALARY_INIT);
    } catch (e) {
      next(
        ApiError.internal(
          `Server error. Problem with salary id: ${salaryId}. Details: ` +
            e
        )
      );
    }
  }

  async calculate(req, res, next) {
    //POST http://localhost:7000/api/salary/calculate
    //salaryInit
    let salary;
    const payload = convertObjValToNumber(req.body);

    const notCalculatedSalary = await updateSalaryInputs(
      payload,
      req.user.id,
      next
    );

    try {
      salary = calcSalary(notCalculatedSalary, next);
      await salary.save();
      return res.json({ user: req.user, salary });
    } catch (e) {
      return next(
        ApiError.internal(
          "Server error. Salary not save. Details: " + e
        )
      );
    }
  }
}

module.exports = new SalaryController();
