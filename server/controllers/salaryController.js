const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");
const { SALARY_INIT } = require("../constants/initStates");
const {
  createCurrentSalaryId,
  createArrLastFourSalaryId,
} = require("../utils/salaryHandlers/idCreators");

// model ServerRes {
//   token: string;
//   message?: string;
//   alcoState?: AlcoState;
//   salaryState?: ISalaryInit;
// }

class SalaryController {
  async save(req, res) {
    //POST //http://localhost:7000/api/salary/save
    // add body {} look for salary_example bellow

    const { year, month } = req.body;
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
        Object.assign(salary, req.body);
        await salary.save();
      } else {
        salary = await Salary.create({
          ...req.body,
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

  async getOne(req, res) {
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

  async getAll(req, res) {
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

  // TODO: check it
  async getLast_2years(req, res) {
    //GET http://localhost:7000/api/salary/getLast_2years?year=2020
    const { year } = req.query; //string
    const userId = Number(req.user.id);
    const prevYear = Number(year) - 1;
    let salaries = [];
    try {
      const arrPromises = await Promise.allSettled([
        Salary.findAll({
          where: { userId, year: prevYear },
        }),
        Salary.findAll({
          where: {
            userId,
            year: year,
          },
        }),
      ]);
      if (arrPromises && arrPromises.length) {
        const [prevYearPromise, yearPromise] = arrPromises;

        if (prevYearPromise.status === "fulfilled") {
          salaries = salaries.concat(prevYearPromise.value);
        }
        if (yearPromise.status === "fulfilled") {
          salaries = salaries.concat(yearPromise.value);
        }

        return res.json({ user: req.user, salaries });
      } else {
        return res.json({ user: req.user, salaries: [] });
      }
    } catch (e) {
      next(
        ApiError.internal(
          "Server error fire when getLast_2years started /" +
            e
        )
      );
    }
  }

  //TODO changeVacation not complete
  async changeVacation(req, res) {
    //POST http://localhost:7000/api/salary/changeVacation
    //salaryInit
    const salaryBeforeCalc = req.query;
    const { year, month } = salaryBeforeCalc;

    // lastFourId: [currentMonth, 1MonthAgo, 2MonthsAgo,3MonthsAgo]
    const lastFourId = createArrLastFourSalaryId(
      req.user.id,
      year,
      month
    );

    let salaries = [];
    try {
      //create arr: [currentSalary, oneMonthAgoSalary,...]
      const arrPromises = await Promise.allSettled(
        lastFourId.map((id) =>
          Salary.findOne({
            where: { id },
          })
        )
      );

      if (arrPromises && arrPromises.length) {
        const isAllFourSalaries = arrPromises
          .slice(1)
          .every(
            (salaryPromise) =>
              salaryPromise.status === "fulfilled"
          );

        if (!isAllFourSalaries) {
          //TODO add checker for exist current salary, create/update it and return
          return res.json({
            user: req.user,
            salary: salaryBeforeCalc,
            message:
              "Before inputting vacation days you must have 3 salaries with zero vacation.",
          });
        }

        const [
          currentSalary,
          monthAgoSalary,
          twoMonthsAgoSalary,
          threeMonthsAgoSalary,
        ] = arrPromises;

        //   const [prevYearPromise, yearPromise] = arrPromises;

        //   if (currentSalary.status === "fulfilled") {
        //     salaries = salaries.concat(prevYearPromise.value);
        //   }
        //   if (yearPromise.status === "fulfilled") {
        //     salaries = salaries.concat(yearPromise.value);
        //   }

        //   return res.json({ user: req.user, salaries });
        // } else {
        return res.json({ user: req.user, salaries: [] });
      }
    } catch (e) {
      next(
        ApiError.internal(
          "Server error fire when getLast_2years started /" +
            e
        )
      );
    }
  }
}

module.exports = new SalaryController();
