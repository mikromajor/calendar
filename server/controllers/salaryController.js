const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");

class SalaryController {
  async add(req, res) {
    //POST //http://localhost:7000/api/salary/add
    // add body {} look for salary_example bellow

    //TODO: after saving the same month to db, is only last user
    const { year, month } = req.body;
    let salary;
    try {
      salary = await Salary.findOne({
        where: { year, month },
      });
      if (salary) {
        Object.assign(salary, req.body);
        salary.userId = req.user.id;
        await salary.save();
      } else {
        salary = await Salary.create({
          ...req.body,
          userId: Number(req.user.id),
        });
      }
    } catch (e) {
      throw new console.error(e);
    }

    return res.json({ user: req.user, salary });
  }

  async getOne(req, res) {
    //GET http://localhost:7000/api/salary/getOne?year=2020&month=1
    const { year, month } = req.query;
    const salary = await Salary.findAll({
      where: { year, month, userId: req.user.id },
    });
    return res.json(salary);
  }
  async getAll(req, res) {
    //GET http://localhost:7000/api/salary/getAll
    const salaries = await Salary.findAll({
      where: { userId: req.user.id },
    });
    return res.json({ user: req.user, salaries });
  }
  async getLast_2years(req, res) {
    //GET http://localhost:7000/api/salary/getLast_2years?year=2020
    const { year } = req.query;

    const salaries = await Promise.allSettled([
      Salary.findAll({
        where: { userId: req.user.id, year: year - 1 },
      }),
      Salary.findAll({
        where: {
          userId: req.user.id,
          year,
          year: year - 1,
        },
      }),
    ]);
    Salary.findAll({
      where: { userId: req.user.id, year },
    });

    return res.json({ user: req.user, salaries });
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
