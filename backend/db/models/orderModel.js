const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    orderTime: {
      type: String,
      required: [true, "Please fill the orderTime"],
    },
    orderDate: {
      type: String,
      required: [true, "Please fill the date"],
    },
    people: {
      type: Number,
      required: [true, "Please fill the People"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", orderSchema);
