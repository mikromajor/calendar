const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  let checkingDate = req.body?.year ? req.body : req.query;
  const { year, month, day } = checkingDate;
  if (
    !year ||
    !month ||
    !day ||
    year <= 0 ||
    month <= 0 ||
    day <= 0
  ) {
    return res.json(
      ApiError.badRequest("Request's data incorrect")
    );
  }
  next();
};
