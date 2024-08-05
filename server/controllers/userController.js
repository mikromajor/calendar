const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Salary } = require("../models/models");
const {
  getDateMonthYear,
} = require("../utils/getDateMonthYear");

// expiresIn: 60, => number -  seconds
// expiresIn: "7d", string -"3h"-hours "8d"-days
const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
};

class UserController {
  //POST http://localhost:7000/api/user/registration
  // body={email, password}
  async registration(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        ApiError.badRequest(
          "Email or password are not correct"
        )
      );
    }
    const candidate = await User.findOne({
      where: { email },
    });
    if (candidate) {
      return next(
        ApiError.forbidden(
          "A user with this email address already exists."
        )
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      password: hashPassword,
    });

    const token = generateJwt(user.id, user.email);

    return res.json({
      token,
      message: "Registration successful",
    });
  }

  //POST http://localhost:7000/api/user/login
  // body={email, password}
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(
        ApiError.unauthorized(
          `Authorization failed. E-mail ${email} has not been found.
          You need to login first`
        )
      );
    }
    let comparePassword = bcrypt.compareSync(
      password,
      user.password
    );
    if (!comparePassword) {
      return next(ApiError.forbidden("Invalid password"));
    }
    const token = generateJwt(user.id, user.email);
    //TODO при логине сервер должен также отдавать алко данные за год
    // const [currentDay, currentMonth, currentYear] =
    //   getDateMonthYear(new Date());
    // req.headers.authorization = "Bearer " + token;

    // req.query.year = currentYear;
    // return next(
    //   `api/alco_calendar/get?year=${currentYear}`
    // );
    return res.json({
      token,
      email,
      message: "Successful login",
    });
  }

  //GET http://localhost:7000/api/user/auth
  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token, message: "Login successful" });
  }
}

module.exports = new UserController();
