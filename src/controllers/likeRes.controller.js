const likeResService = require("../services/likeRes.service");
const { response } = require("../helpers/response");

const getLikesByUserId = () => {
  return async (req, res) => {
    try {
      const { userId } = req.params;
      const likes = await likeResService.getLikesByUserId(userId);
      res.status(200).json(likes);
    } catch (error) {
      next(error);
    }
  };
};
const getLikesByResId = () => {
  return async (req, res) => {
    try {
      const { resId } = req.params;
      const likes = await likeResService.getLikesByResId(resId);
      res.status(200).json(likes);
    } catch (error) {
      next(error);
    }
  };
};

// POST localhost:4000/restaurants/:userId/like/resId - body: {dateLike: "2022-22-10"}
const likeRestaurant = () => {
  return async (req, res, next) => {
    try {
      const { userId, resId } = req.params;
      const { dateLike } = req.body
      await likeResService.likeRestaurant(userId, resId, dateLike);
      res.status(200).json(response("OK"));
    } catch (error) {
      
      next(error);
    }
  };
};
module.exports = {

  getLikesByUserId,
  getLikesByResId,
  likeRestaurant
};