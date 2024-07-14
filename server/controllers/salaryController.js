const { Salary } = require("../models/models");
const ApiError = require("../error/ApiError");

class SalaryController {
  async add(req, res) {
    const { year, month } = req.body;

    let salary = await Salary.findOne({
      where: { year, month },
    });
    if (salary) {
      Object.assign(salary, req.body);
      await salary.save();
    } else {
      salary = await Salary.create({ ...req.body });
    }
    return res.json(salary);
  }

  async getOne(req, res) {
    const { year, month } = req.params;
    const salary = await Salary.findAll({
      where: { year, month },
    });
    return res.json(req.query);
  }
  async getAll(req, res) {
    const salary = await Salary.findAll();
    return res.json(salary);
  }
}

module.exports = new SalaryController();
