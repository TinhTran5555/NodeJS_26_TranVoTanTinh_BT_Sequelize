const orderService = require("../services/order.service");

const createOrder = () => {
    return async (req, res) => {
      try {
        const order = req.body;
        const createdOrder = await orderService.createOrder(order);
        res.status(200).json({ data: createdOrder });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
  };
  module.exports = {
    createOrder
  };