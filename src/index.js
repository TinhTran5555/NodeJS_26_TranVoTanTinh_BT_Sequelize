const express = require("express");
const { sequelize } = require("./models");
const { AppError, handleErrors } = require("./helpers/error");
const app = express();
app.use(express.json());
sequelize.sync({ alter: true });
const v1 = require("./routers/v1");
app.use("/api/v1", v1);
app.get("/error", (req, res, next) => {
    throw new AppError(500, "Internal Server");
  });
  
  app.use(handleErrors);
app.listen(4000);
