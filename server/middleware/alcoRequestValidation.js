const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    let checkingDate = req?.body ? req.body : req.query;
    const { year, month, day } = checkingDate;
    if (year <= 0 || month <= 0 || day <= 0) {
      return res.json(
        ApiError.badRequest(
          "Data must be positive integers"
        )
      );
    }
    next();
  } catch (error) {
    return res.json(
      ApiError.badRequest("Request's data incorrect")
    );
  }
};
