const asyncHandler = require("express-async-handler");
const restaurantModel = require("../models/restaurantModel");

// @desc get all restaurants
// @route Get /api/restaurants
// @access public
const getRestaurants = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.find();
  res.status(200).json(restaurant);
});

// @desc insert new restaurant
// @route POST /api/restaurant
// @access Private for admins only
const addRestaurant = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.locations ||
    !req.body.type ||
    !req.body.logo ||
    !req.body.discount ||
    !req.body.rate
  ) {
    res.status(400);
    throw new Error("Please add all inputs");
  }
  const restaurant = await restaurantModel.create({
    logo: req.body.logo,
    title: req.body.title,
    locations: req.body.locations,
    type: req.body.type,
    rate: req.body.rate,
    discount: req.body.discount,
  });
  res.status(200).json(restaurant);
});

// @desc PUT restaurant
// @access Private for admin
// @Route /api/restaurants/:id
const editRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.findById(req.params.id);

  if (!restaurant) {
    res.status(400);
    throw new Error("Restaurant not found");
  }
  const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedRestaurant);
});
// @desc delete restaurant
// @access private for admins
// @route /api/restaurants/:id
const deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.findById(req.params.id);
  if (!restaurant) {
    res.status(400);
    throw new Error("Restaurant not found");
  }
  await restaurantModel.remove(restaurant);
  res.status(200).json({ id: req.params.id });
});
// @desc get restaurant
// @access Private
// @Route /api/Details/:id
const restaurantDetails = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.findById(req.params.id);
  if (!restaurant) {
    res.status(401);
    throw new Error("Restaurant not found");
  }
  res.status(200).json(restaurant);
});

module.exports = {
  addRestaurant,
  restaurantDetails,
  getRestaurants,
  deleteRestaurant,
  editRestaurant,
};
