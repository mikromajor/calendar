const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
    if (!token) {
      return res
        .status(401)
        .json({ message: "User is not authorized" });
    }
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY
    );
    // console.log("TOKEN decoded =>", decoded);

    // vulnerability: everybody who has the token, has full access.
    //TODO: add sekret_keys to the cooki or sms else - find out about it

    req.user = decoded; // {id,email}
    next();
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
};
