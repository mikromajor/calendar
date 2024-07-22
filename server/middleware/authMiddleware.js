const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    // Bearer tokentoken
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(
        ApiError.unauthorized("User not authorized")
      );
      // res
      //   .status(401)
      //   .json({ message: "User is not authorized" });
    }
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (err, user) => {
        if (err)
          return next(
            ApiError.forbidden("You have not access.")
          );
        req.user = user;
        next();
      }
    );

    // vulnerability: everybody who has the token, has full access.
    //TODO: add sekret_keys to the cooki or sms else - find out about it

    // req.user = decoded; // {id,email}
    // next();
  } catch (e) {
    // res.status(401).json({ message: "Not authorized" });
    next(ApiError.unauthorized("Not authorized"));
  }
};
