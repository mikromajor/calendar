const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");

class SalaryController {
  async add(req, res) {
    //POST //http://localhost:7000/api/salary
    // add body {}
    const { year, month } = req.body;

    let salary = await Salary.findOne({
      where: { year, month },
    });
    if (salary) {
      Object.assign(salary, req.body);
      salary.userId = req.user.id;
      await salary.save();
    } else {
      salary = await Salary.create({
        ...req.body,
        userId: req.user.id,
      });
    }
    return res.json(salary);
  }

  async getOne(req, res) {
    //GET http://localhost:7000/api/salary?year=2020&month=1
    const { year, month } = req.query;
    const salary = await Salary.findAll({
      where: { year, month, userId: req.user.id },
    });
    return res.json(salary);
  }
  async getAll(req, res) {
    //GET http://localhost:7000/api/salary
    const salary = await Salary.findAll({
      where: { userId: req.user.id },
    });
    return res.json(salary);
  }
}

module.exports = new SalaryController();
