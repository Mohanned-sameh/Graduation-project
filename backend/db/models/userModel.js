const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userSchema);
