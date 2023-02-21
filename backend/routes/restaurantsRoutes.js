const express = require("express");
const router = express.Router();
const { isAdmin, protect } = require("../middleware/authMiddleware");
const {
  getRestaurants,
  addRestaurant,
  editRestaurant,
  restaurantDetails,
  deleteRestaurant,
} = require("../controller/restaurantController");

router.route("/").get(getRestaurants).post(addRestaurant, isAdmin, protect);
router
  .route("/:id")
  .delete(deleteRestaurant, isAdmin, protect)
  .put(editRestaurant, isAdmin, protect);
router.route("/:id").get(restaurantDetails, protect);

module.exports = router;
