const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Salary } = require("../models/models");
const { generateJwt } = require("../utils/useToken");

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

    req.user = {
      id: user.id,
      token,
      message: "Successful login",
    };
    return next();
  }

  //GET http://localhost:7000/api/user/auth
  // async check(req, res, next) {
  //   // TODO add ID validation
  //   const { id, email } = req.user;
  //   const token = generateJwt(id, email);
  //   return res.json({
  //     token,
  //     message: "Authorization is ok",
  //   });
  // }
}

module.exports = new UserController();

// //Note: correct handle error
//     return next(
//       ApiError.badRequest("Request's data incorrect")
//     );
//     next(
//       ApiError.internal("Server error.")
//     );
