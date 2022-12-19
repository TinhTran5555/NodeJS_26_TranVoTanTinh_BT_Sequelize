const { Food, User } = require("../models");
const { AppError } = require("../helpers/error");

const createOrder = async (userId, foodId, amount, code, arrSubId) => {
  try {
    const food = await Food.findByPk(foodId);
    if (!food) {
      throw new AppError(400, "food not found");
    }
    const user = await User.findByPk(userId);
    if (!user) {
      throw new AppError(400, "User not found");
    }
    console.log(food.__proto__);
    const hasOrder = await food.hasFoodUser(user.userId);

    if (hasOrder) {
      throw new AppError(400, "Order already exists");
    } else {
      await food.addFoodUser(user.userId, { through: { amount: amount ,code: code, arrSubId:arrSubId } });
    }

    return null;
  } catch (error) {

    throw error;
  }
};
module.exports = {
  createOrder,
};
