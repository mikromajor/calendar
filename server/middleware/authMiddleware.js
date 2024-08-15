const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    // Bearer "tokenHeader.tokenBody.tokenEnd"
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(
        ApiError.unauthorized(
          "User not authorized. Please registration first."
        )
      );
    }
    jwt.verify(
      token,
      process.env.SECRET_KEY,
      (err, user) => {
        if (err) {
          return next(
            ApiError.forbidden(
              "You have not access. Please login"
            )
          );
        }
        req.user = user;
        next();
      }
    );
  } catch (e) {
    // res.status(401).json({ message: "Not authorized" });
    next(ApiError.forbidden("No access"));
  }
};
