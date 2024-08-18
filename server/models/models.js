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
});

const Salary = sequelize.define("salary", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  year: {
    type: DataTypes.STRING,
  },
  month: {
    type: DataTypes.STRING,
  },
  salaryRate: {
    type: DataTypes.INTEGER,
    defaultValue: 28,
  },
  premiumRate: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  premiumUzn: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  taxRate: {
    type: DataTypes.INTEGER,
    defaultValue: 27,
  },
  nettoPerHours: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  weekDays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  weekendDays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  standardWorkHours: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  extraHours_50: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  extraHours_100: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  extraHours_120: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  sickLeaveWeekDays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  sickLeaveWeekendDays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  holidays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  usedVacation: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  bloodDonation: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  standardSalary: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  extraSalary: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalSalary: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

User.hasMany(AlcoYear);
AlcoYear.belongsTo(User);

User.hasMany(AlcoMonth);
AlcoMonth.belongsTo(User);

User.hasMany(AlcoDay);
AlcoDay.belongsTo(User);

AlcoYear.hasMany(AlcoMonth);
AlcoMonth.belongsTo(AlcoYear);

AlcoYear.hasMany(AlcoDay);
AlcoDay.belongsTo(AlcoYear);

AlcoMonth.hasMany(AlcoDay);
AlcoDay.belongsTo(AlcoMonth);

User.hasMany(Salary);
Salary.belongsTo(User);

module.exports = {
  User,
  AlcoYear,
  AlcoMonth,
  AlcoDay,
  Salary,
};
