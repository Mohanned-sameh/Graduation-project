const asyncHandler = require("express-async-handler");
const restaurantModel = require("../db/models/restaurantModel");

// @desc get all restaurants
// @route Get /api/restaurants
// @access public
const getRestaurants = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.find();
  res.status(200).json(restaurant);
});

// @desc insert new restaurant
// @route POST /api/restaurants
// @access Private for admins only
const addRestaurant = asyncHandler(async (req, res) => {
  if (
    !req.body.logo ||
    !req.body.description ||
    !req.body.title ||
    !req.body.type ||
    !req.body.locations ||
    !req.body.opens ||
    !req.body.closes ||
    !req.body.discount ||
    !req.body.rate ||
    !req.body.menu
  ) {
    res.status(400);
    throw new Error("fill in all the fields please");
  }
  const restaurantModel = await restaurantModel.findOne({ title });
  if (restaurantModel) {
    res.status(400);
    throw new Error("restaurant already exists");
  }
  const restaurant = await restaurantModel.create({
    logo: req.body.logo,
    title: req.body.title,
    description: req.body.description,
    locations: req.body.locations,
    type: req.body.type,
    opens: req.body.opens,
    closes: req.body.closes,
    rate: req.body.rate,
    discount: req.body.discount,
    menu: req.body.menu,
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
