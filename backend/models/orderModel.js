const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    restuarant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    orderTime: {
      type: Date,
      required: true,
    },
    people: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", orderSchema);
