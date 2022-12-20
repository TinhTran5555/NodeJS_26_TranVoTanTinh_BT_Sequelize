
const { AppError } = require("../helpers/error");

const { Restaurant, User } = require("../models");


const getLikesByUserId = async (userId) => {
  try {
    const userLikes = await User.findAll(
      {
        where: {
          userId: userId,
        },
        include:
        {
          association: "userLike",
        },
        attributes: {
          exclude: ["password"],
        },
      }
    );
    return userLikes;
  } catch (error) {
    throw error;
  }
};
const getLikesByResId = async (resId) => {
  try {
    const restaurantLikes = await Restaurant.findAll(
      {
        where: {
          resId: resId,
        },
        include:
        {
          association: "restaurantLike",
          attributes: {
            exclude: ["password"],
          },
        },

      }
    );
    return restaurantLikes;
  } catch (error) {
    throw error;
  }
};

const likeRestaurant = async (userId, resId, dateLike) => {
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
    const hasLiked = await restaurant.hasRestaurantLike(user.userId);

    if (hasLiked) {
      await restaurant.removeRestaurantLike(user.userId);
    } else {
      await restaurant.addRestaurantLike(user.userId, { through: { dateLike: dateLike } });
    }

    return null;
  } catch (error) {

    throw error;
  }
};

module.exports = {
  getLikesByUserId,
  getLikesByResId,
  likeRestaurant
};