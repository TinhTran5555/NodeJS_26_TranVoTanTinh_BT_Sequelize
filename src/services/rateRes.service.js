
const { Restaurant, User } = require("../models");
const { AppError } = require("../helpers/error");

const getRatesByUserId = async (userId) => {
   try {
    const userRates = await User.findAll(
      {
        where: {
          userId: userId,
        },
        include:
        {
          association: "userRate",
        },
        attributes: {
          exclude: ["password"],
        },
      }
    );
    return userRates;
  } catch (error) {
    throw error;
  }

};
const getRatesByResId = async (resId) => {
   try {
    const restaurantRates = await Restaurant.findAll(
      {
        where: {
          resId: resId,
        },
        include:
        {
          association: "restaurantRate",
        },
        attributes: {
          exclude: ["password"],
        },
      }
    );
    return restaurantRates;
  } catch (error) {
    throw error;
  }
};
const rateRestaurant = async (userId, resId, amount, dateRate ) => {
  try {
    const restaurant = await Restaurant.findByPk(resId);
    if (!restaurant) {
      throw new AppError(400, "Restaurant not found");
    }
    const user = await User.findByPk(userId);
    if (!user) {
      throw new AppError(400, "User not found");
    }
    console.log(restaurant.__proto__);
    const hasLiked = await restaurant.hasRestaurantRate(user.userId);

    if (hasLiked) {
      await restaurant.removeRestaurantRate(user.userId);
    } else {
      await restaurant.addRestaurantRate(user.userId, { through: {amount: amount, dateRate: dateRate } });
    }

    return null;
  } catch (error) {

    throw error;
  }
};
module.exports = {
  rateRestaurant,
  getRatesByResId,
  getRatesByUserId
};
