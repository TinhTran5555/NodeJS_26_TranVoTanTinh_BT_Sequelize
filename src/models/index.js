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

const User = require("./User")(sequelize);
const Restaurant = require("./Restaurant")(sequelize);
const LikeRes = require("./LikeRes")(sequelize);
const RateRes = require("./RateRes")(sequelize)
const Order = require("./Order")(sequelize)
const Food = require("./Food")(sequelize)


// Like 
User.belongsToMany(Restaurant, {
  as: "userLike",
  through: LikeRes,
  foreignKey: "userId",
});
Restaurant.belongsToMany(User, {
  as: "restaurantLike",
  through: LikeRes,
  foreignKey: "resId",
});
// Rate
User.belongsToMany(Restaurant, {
  as: "userRate",
  through: RateRes,
  foreignKey: "userId",
});
Restaurant.belongsToMany(User, {
  as: "restaurantRate",
  through: RateRes,
  foreignKey: "resId",
});
//Order
User.belongsToMany(Food, {
  as: "userFood",
  through: Order,
  foreignKey: "userId",
});
Food.belongsToMany(User, {
  as: "foodUser",
  through: Order,
  foreignKey: "foodId",
});


module.exports = {
  sequelize,
  User,
  Restaurant,
  Food
};
