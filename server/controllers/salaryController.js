const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");

const createIds = (id, year, month) => {
  const userId = Number(id);
  const salaryId = userId + "_" + year + "_" + month;
  return { userId, salaryId };
};

class SalaryController {
  async add(req, res) {
    //POST //http://localhost:7000/api/salary/add
    // add body {} look for salary_example bellow

    const { year, month } = req.body;
    const { userId, salaryId } = createIds(
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
    const { year, month } = req.query;
    const { salaryId } = createIds(
      req.user.id,
      year,
      month
    );
    try {
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
      const arrPromise = await Promise.allSettled([
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
      if (arrPromise && arrPromise.length) {
        const [prevYearPromise, yearPromise] = arrPromise;

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
}

module.exports = new SalaryController();

// const salary_example = {
// "month": "1",
// "year": "2020",
// "salaryRate": "20",
// "premiumRate": "30",
// "premiumUzn": "0",
// "taxRate": "27",
// "nettoPerHours": "14",
// "weekDays": "22",
// "weekendDays": "9",
// "standardWorkHours": "176",
// "extraHours_50": "0",
// "extraHours_100": "0",
// "extraHours_120": "0",
// "sickLeaveWeekDays": "0",
// "sickLeaveWeekendDays": "0",
// "holidays": "0",
// "usedVacation": "0",
// "bloodDonation": "0",
// "standardSalary": "3200",
// "extraSalary": "1200",
// "totalSalary": "4400"
// }
