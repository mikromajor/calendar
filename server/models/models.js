const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: { type: DataTypes.STRING },
});

const AlcoYear = sequelize.define("year", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  totalVodka: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalBill: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

const AlcoMonth = sequelize.define("month", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  totalVodka: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalBill: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

const AlcoDay = sequelize.define("day", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  totalVodka: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalBill: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

User.hasMany(AlcoYear);
AlcoYear.belongsTo(User);

AlcoYear.hasMany(AlcoMonth);
AlcoMonth.belongsTo(AlcoYear);

AlcoYear.hasMany(AlcoDay);
AlcoDay.belongsTo(AlcoYear);

AlcoMonth.hasMany(AlcoDay);
AlcoDay.belongsTo(AlcoMonth);

module.exports = {
  User,
  AlcoYear,
  AlcoMonth,
  AlcoDay,
};
