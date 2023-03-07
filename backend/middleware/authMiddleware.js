const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../db/models/userModel");
const adminModel = require("../db/models/adminModel");

const isAdmin = asyncHandler(async (req, res, next) => {
  let isAdmin;
  const admin = adminModel.findOne({ isAdmin });
  if (admin) {
    next();
  } else {
    res.redirect("/");
  }
});
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized , No Token Found!");
  }
});

module.exports = { protect, isAdmin };
