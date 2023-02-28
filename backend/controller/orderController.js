const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel.js");
const User = require("../models/userModel.js");
const Restaurant = require("../models/restaurantModel.js");

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user });
  res.status(200).json(order);
});

const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.orderTime || !req.body.people) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const order = await Order.create({
    orderTime: new Date(req.body.orderTime),
    user: req.user,
    people: req.people,
    restuarant: req.params.id,
  });
  res.status(200).json(order);
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (order.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updateOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateOrder);
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (order.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await order.remove(order);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
};
