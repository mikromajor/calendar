const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const AlcoYear = sequelize.define("year", {
  id: {
    type: DataTypes.STRING,
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
const CurrentDate = sequelize.define("current_date", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  year: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
  month: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
  day: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
});
User.hasMany(AlcoYear);
AlcoYear.belongsTo(User);

User.hasOne(CurrentDate);
CurrentDate.belongsTo(User);

AlcoYear.hasMany(AlcoMonth);
AlcoMonth.belongsTo(AlcoYear);

AlcoYear.hasMany(CurrentDate);
CurrentDate.belongsTo(AlcoYear);

AlcoMonth.hasMany(CurrentDate);
CurrentDate.belongsTo(AlcoMonth);

AlcoMonth.hasMany(AlcoDay);
AlcoDay.belongsTo(AlcoMonth);

AlcoDay.hasOne(CurrentDate);
CurrentDate.belongsTo(AlcoDay);

//-----------------

module.exports = {
  User,
  AlcoYear,
  AlcoMonth,
  AlcoDay,
  CurrentDate,
};
