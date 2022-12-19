// Routers V1
const express = require("express");

const likeResController = require("../../controllers/likeRes.controller");
const rateResController = require("../../controllers/rateRes.controller");
const orderController = require("../../controllers/order.controller");

const v1 = express.Router();

// like
v1.get("/like/user/:userId", likeResController.getLikesByUserId());
v1.get("/like/res/:resId", likeResController.getLikesByResId());
v1.post("/restaurants/:userId/like/:resId", likeResController.likeRestaurant());
// rate

v1.get("/rate/user/:userId", likeResController.getLikesByUserId());
v1.get("/rate/res/:resId", likeResController.getLikesByResId());
v1.post("/restaurants/:userId/rate/:resId", rateResController.rateRestaurant());

// order
v1.post("/food/:userId/order/:foodId", orderController.createOrder());
v1.post("/order/create", orderController.createOrder());



module.exports = v1;
