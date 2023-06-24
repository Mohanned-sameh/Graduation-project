const asyncHandler = require("express-async-handler");
const Order = require("../db/models/orderModel.js");
const User = require("../db/models/userModel.js");
const Restaurant = require("../db/models/restaurantModel.js");

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user.id });
  res.status(200).json(order);
});

const setOrder = asyncHandler(async (req, res) => {
  if (!req.body.orderTime || !req.body.people || !req.body.orderDate) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const orderExists = await Order.findOne({
    restaurant: req.body.restaurant,
    orderDate: req.body.orderDate,
  });
  if (orderExists) {
    res.status(400);
    throw new Error("Order already exists");
  }

  const orderTimeString = req.body.orderTime;
  const orderDateString = req.body.orderDate;

  const orderDateTime = new Date(`${orderDateString}T${orderTimeString}`);
  const currentTime = new Date();

  if (orderDateTime < currentTime) {
    res.status(400);
    throw new Error("Order time has already passed");
  }

  const order = await Order.create({
    user: req.user,
    restaurant: req.body.restaurant,
    orderTime: orderTimeString,
    people: req.body.people,
    orderDate: orderDateString,
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
  await order.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
};
