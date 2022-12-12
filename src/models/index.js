// Setup Sequelize
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("BaiTapSequelize", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize Connected");
  } catch (error) {
    console.log("Sequelize Error", error);
  }
})();

module.exports = sequelize;
