const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please insert your first name"],
      lowercase: true,
      minLength: 4,
      maxLength: 20,
    },
    lastName: {
      type: String,
      required: [true, "Please insert your last name"],
      lowercase: true,
      minLength: 4,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "Please inert your email"],
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "please provide a phone number"],
    },
    password: {
      type: String,
      required: [true, "Please insert your password"],
    },
    isAdmin: {
      type: Boolean,
      required: [true, "please check this"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("admin", adminSchema);
