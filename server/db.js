const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME, // Название БД: calc_db
  process.env.DB_USER, // Пользователь: postgres
  process.env.DB_PASSWORD, // ПАРОЛЬ: 7891
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
