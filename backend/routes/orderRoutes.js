const express = require("express");
const router = express.Router();

const {
  getOrder,
  setOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController.js");
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").get(protect, getOrder).post(protect, setOrder);
router.route("/:id").delete(protect, deleteOrder).put(protect, updateOrder);

module.exports = router;
