const { Sequelize } = require("sequelize");

const database = new Sequelize("localhost", "username", "password", {
  dialect: "mysql"
});

module.exports = database;
