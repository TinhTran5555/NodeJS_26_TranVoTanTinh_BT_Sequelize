const rateResService = require("../services/rateRes.service");
const { response } = require("../helpers/response");

  const getRatesByUserId = () => {
    return async (req, res) => {
      try {
        const { userId } = req.params;
        const likes = await rateResService.getRatesByUserId(userId);
        res.status(200).json(response(likes));
      } catch (error) {
        next(error);
      }
    };
  };
  const getRatesByResId = () => {
    return async (req, res) => {
      try {
        const { resId } = req.params;
        const likes = await rateResService.getRatesByResId(resId);
        res.status(200).json(response(likes));
      } catch (error) {
        next(error);
      }
    };
  };
  // POST localhost:4000/restaurants/:userId/rate/resId - body: {amount: "5", dateLike: "2022-22-10"}
  const rateRestaurant = () => {
    return async (req, res, next) => {
      try {
        const { userId, resId } = req.params;
        const { amount, dateRate } = req.body
        await rateResService.rateRestaurant(userId, resId,amount , dateRate );
        res.status(200).json(response("OK"));
      } catch (error) {
        
        next(error);
      }
    };
  };
  module.exports = {
    rateRestaurant,
    getRatesByUserId,
    getRatesByResId
  };