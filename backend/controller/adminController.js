const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const adminModel = require("../models/adminModel");

// @desc Register new admin
// @route POST /api/admins
// @access Private
const registerAdmin = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please provide all fields");
  }
  // Check if admin exists
  const adminExists = await adminModel.findOne({ email });
  if (adminExists) {
    res.status(400);
    throw new Error("Admin exists");
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create admin

  const admin = await adminModel.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isAdmin,
  });
  if (admin) {
    res.status(201).json({
      _id: admin._id,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      token: generateToken(admin._id),
      isAdmin: admin.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});
// login as admin
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({ email });

  if (admin && bcrypt.compare(password, admin.password)) {
    res.json({
      _id: admin.id,
      firstName: admin.firstName,
      lastName: admin.lastName,
      email: admin.email,
      token: generateToken(admin._id),
      isAdmin: admin.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});
// get admin page
const getAdmin = asyncHandler(async (req, res) => {
  const admin = await adminModel.findById(req.params.id);
  if (!req.admin) {
    res.status(401);
    throw new Error("Admin not found");
  }
  if (admin) {
    res.status(200).json(admin);
  }
});

// edit admin
const editAdmin = asyncHandler(async (req, res) => {
  const admin = await adminModel.findById(req.params.id);
  if (!req.admin) {
    res.status(401);
    throw new Error("admin not found");
  }
  if (admin) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const updatedAdmin = await adminModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedAdmin);
  }
});
// generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
module.exports = {
  registerAdmin,
  loginAdmin,
  getAdmin,
  editAdmin,
};
