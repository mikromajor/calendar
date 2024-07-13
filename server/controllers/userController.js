const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/models");

const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: "72h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { id, email, password } = req.body;
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
        ApiError.badRequest(
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

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("User is not found"));
    }
    let comparePassword = bcrypt.compareSync(
      password,
      user.password
    );
    if (!comparePassword) {
      return next(ApiError.internal("Invalid password"));
    }
    const token = generateJwt(user.id, user.email);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token });
  }
}

module.exports = new UserController();
