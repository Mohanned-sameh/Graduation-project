const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  logo: {
    type: String,
    required: [true, "Please insert logo"],
  },
  title: {
    type: String,
    required: [true, "Please insert your restaurant title"],
    lowercase: true,
  },
  type: [
    {
      type: String,
      required: [true, "Please insert your restaurant type"],
    },
  ],
  locations: [
    {
      type: String,
      required: [true, "please insert your restaurant location"],
    },
  ],
  rate: {
    type: Number,
  },
  discount: {
    type: Boolean,
  },
});
module.exports = mongoose.model("restaurant", restaurantSchema);
