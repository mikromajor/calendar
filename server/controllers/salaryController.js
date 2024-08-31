const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");
const { SALARY_INIT } = require("../constants/initStates");
const {
  createCurrentSalaryId,
  createArrLastThreeSalaryId,
} = require("../utils/salaryHandlers/idCreators");
const {
  calcVacationCoef,
} = require("../utils/salaryHandlers/calcVacationCoef");
const {
  calcSalary,
} = require("../utils/salaryHandlers/calcSalary");
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
  async save(req, res, next) {
    //POST //http://localhost:7000/api/salary/save
    // add body {} look for salary_example bellow
    const payload = convertObjValToNumber(req.body);
    const { year, month } = payload;
    const { userId, salaryId } = createCurrentSalaryId(
      req.user.id,
      year,
      month
    );

    try {
      let salary = await Salary.findOne({
        where: { id: salaryId },
      });
      if (salary) {
        Object.assign(salary, payload);
        await salary.save();
      } else {
        salary = await Salary.create({
          ...payload,
          userId,
          id: salaryId,
        });
      }
      return res.json({ user: req.user, salary });
    } catch (e) {
      next(
        ApiError.internal(
          `Salary with id=${salaryId}, was not add/update ` +
            e
        )
      );
    }
  }

  async getOne(req, res, next) {
    //GET http://localhost:7000/api/salary/getOne?year=2020&month=1
    try {
      const { year, month } = req.query;
      const { salaryId } = createCurrentSalaryId(
        req.user.id,
        year,
        month
      );

      let salary = await Salary.findOne({
        where: { id: salaryId },
      });
      if (!salary) {
        salary = SALARY_INIT;
      }
      return res.json(salary);
    } catch (e) {
      next(
        ApiError.internal(
          "Server error fire when getOne started/ " + e
        )
      );
    }
  }

  async getAll(req, res, next) {
    //GET http://localhost:7000/api/salary/getAll
    try {
      const salaries = await Salary.findAll({
        where: { userId: Number(req.user.id) },
      });
      return res.json({ user: req.user, salaries });
    } catch (e) {
      next(
        ApiError.internal(
          "Server error fire when getAll started/ " + e
        )
      );
    }
  }

  //TODO changeVacation not complete
  async changeVacation(req, res, next) {
    //POST http://localhost:7000/api/salary/changeVacation
    //salaryInit
    const payload = convertObjValToNumber(req.body);
    const { year, month } = payload;

    const { currentId, userId } = createCurrentSalaryId(
      req.user.id,
      year,
      month
    );
    let salary;

    try {
      salary = await Salary.findOne({
        where: { id: currentId },
      });
      if (!salary) {
        salary = await Salary.create({
          ...payload,
          userId,
          id: currentId,
        });
      }
    } catch (e) {
      return next(
        ApiError.internal(
          "Server error  when changeVacation try get/handle currentSalary. Details:" +
            e
        )
      );
    }

    // lastFourId: [currentMonth, 1MonthAgo, 2MonthsAgo,3MonthsAgo]
    const lastThreeId = createArrLastThreeSalaryId(
      req.user.id,
      year,
      month
    );

    let promiseLastThreeSalaries;
    try {
      promiseLastThreeSalaries = await Promise.allSettled(
        lastThreeId.map(
          async (pastId) =>
            await Salary.findOne({
              where: { id: pastId },
            })
        )
      );
    } catch (e) {
      return next(
        ApiError.internal(
          "Server error  when changeVacation try get 3 last salaries. Details:" +
            e
        )
      );
    }
    const isLastThreeSalaries =
      promiseLastThreeSalaries.every(
        (promise) =>
          promise.status === "fulfilled" && promise.value
      );

    try {
      if (!isLastThreeSalaries) {
        calcSalary(salary, 0);
        await salary.save();
        return res.json({
          user: req.user,
          salary,
          message:
            "You must have 3 salaries with zero used vacation before current salary for a true result.",
        });
      }

      const pastThreeSalaries =
        promiseLastThreeSalaries.map((prom) => prom.value);

      // vacationCoef : (zl/workDay)
      const vacationCoef = calcVacationCoef(
        pastThreeSalaries
      );

      //TODO  calculate salary
      calcSalary(salary, vacationCoef);
      await salary.save();
      return res.json({ user: req.user, salary });
    } catch (e) {
      return next(
        ApiError.internal(
          "Server error  when changeVacation try calculate/save salary to db. Details: " +
            e
        )
      );
    }
  }
}

module.exports = new SalaryController();
