// Routers V1
const express = require("express");
const userController = require("../../controllers/users.controller");
const likeResController = require("../../controllers/likeRes.controller");
const rateResController = require("../../controllers/rateRes.controller");
const orderController = require("../../controllers/order.controller");

const v1 = express.Router();

//user 
v1.get("/user", userController.getUsers());
v1.post("/user/create", userController.createUser());
v1.delete("/user/delete/:userId", userController.deleteUser());
// like
v1.get("/like/user/:userId", likeResController.getLikesByUserId());
v1.get("/like/res/:resId", likeResController.getLikesByResId());
v1.post("/like/create", likeResController.createLike());
v1.delete("/like/delete/:userId&:resId", likeResController.deleteLike());
// rate
v1.post("/rate/create", rateResController.createRate());
v1.get("/rate/user/:userId", likeResController.getLikesByUserId());
v1.get("/rate/res/:resId", likeResController.getLikesByResId());
// order
v1.post("/order/create", orderController.createOrder());

module.exports = v1;
