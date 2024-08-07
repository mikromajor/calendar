const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// expiresIn: 60, => number -  seconds
// expiresIn: "7d", string -"3h"-hours "8d"-days

const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
};

module.exports = { generateJwt };
