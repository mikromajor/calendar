const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const AlcoYear = sequelize.define("year", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  total_vodka: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  total_bill: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
});

const AlcoMonth = sequelize.define("month", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  total_vodka: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  total_bill: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
});

const AlcoDay = sequelize.define("day", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  total_vodka: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  total_bill: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
});

User.hasMany(AlcoYear);
AlcoYear.belongsTo(User);

AlcoYear.hasMany(AlcoMonth);
AlcoMonth.belongsTo(AlcoYear);

AlcoMonth.hasMany(AlcoDay);
AlcoDay.belongsTo(AlcoMonth);

module.exports = {
  User,
  AlcoYear,
  AlcoMonth,
  AlcoDay,
};
