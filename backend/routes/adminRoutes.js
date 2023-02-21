const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAdmin,
  editAdmin,
} = require("../controller/adminController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.post("/", protect, isAdmin, registerAdmin);
router.post("/login", loginAdmin);
router
  .route("/admin/:id")
  .get(protect, isAdmin, getAdmin)
  .put(protect, isAdmin, editAdmin);

module.exports = router;
