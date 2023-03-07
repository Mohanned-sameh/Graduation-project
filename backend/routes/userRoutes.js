const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  editMe,
} = require("../controller/userController.js");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);

router.get("/me/:id", protect, getMe);
router.put("/me/:id", protect, editMe);

module.exports = router;
