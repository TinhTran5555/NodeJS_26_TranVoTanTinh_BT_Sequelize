const orderService = require("../services/order.service");
const { response } = require("../helpers/response");

const createOrder = () => {
    return async (req, res, next) => {
      try {
        const { userId, foodId } = req.params;
      const { amount, code, arrSubId } = req.body
       await orderService.createOrder(userId , foodId, amount, code, arrSubId);
       res.status(200).json(response("OK"));
      } catch (error) {
        next(error);
      }
    };
  };
  module.exports = {
    createOrder
  };