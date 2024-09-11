const ApiError = require("../error/ApiError");
const getCurrentDate = require("../utils/getCurrentDate");

const INIT_BODY = getCurrentDate();
modules.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const { year, month, day, additionVodka } = req.body;
    if (year <= 0 || month <= 0 || day <= 0) {
      return res.json(
        ApiError.badRequest(
          "Data must be positive integers"
        )
      );
    }
  } catch (error) {
    return res.json(
      ApiError.badRequest("Request's data incorrect")
    );
  }
};
