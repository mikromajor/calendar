const { Salary } = require("../../models/models");
const ApiError = require("../../error/ApiError");

const getArrSalaries = async (arrId, next) => {
  let promiseSalaries;
  const result = { isAllSalaries: false, salaries: null };
  try {
    promiseSalaries = await Promise.allSettled(
      arrId.map(
        async (pastId) =>
          await Salary.findOne({
            where: { id: pastId },
          })
      )
    );
    result.isAllSalaries = promiseSalaries.every(
      (promise) =>
        promise.status === "fulfilled" && promise.value
    );
    if (!result.isAllSalaries) {
      return result;
    }

    result.salaries = promiseSalaries.map(
      (prom) => prom.value
    );
    return result;
  } catch (e) {
    return next(
      ApiError.internal(
        "Server error  when getArrSalaries try get salaries. Details:" +
          e
      )
    );
  }
};

module.exports = { getArrSalaries };
