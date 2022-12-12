const RateRes = require("../models/RateRes");
const createRate = async (data) => {
  try {
    const createdLike = await RateRes.create(data);
    return createdLike;
  } catch (error) {
    throw error;
  }
};
const getRatesByUserId = async (userId) => {
  try {
    const likes = await RateRes.findAll({
      where: {
        userId: userId,
      },
    });
    return likes;
  } catch (error) {
    throw error;
  }
};
const getRatesByResId = async (resId) => {
  try {
    const likes = await RateRes.findAll({
      where: {
        resId: resId,
      },
    });
    return likes;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createRate,
  getRatesByResId,
  getRatesByUserId
};
