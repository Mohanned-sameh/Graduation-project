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
  description: {
    type: String,
    required: [true, "Please add the description"],
  },
  type: {
    type: String,
    required: [true, "Please insert your restaurant type"],
  },
  locations: {
    type: String,
    required: [true, "please insert your restaurant location"],
  },
  opens: {
    type: String,
    required: [true, "please insert when do you open"],
  },
  closes: {
    type: String,
    required: [true, "Please insert when do you close"],
  },
  rate: {
    type: Number,
    required: [true, "please insert the rate"],
  },
  discount: {
    type: Boolean,
    required: [true, "please insert the discount"],
  },
  menu: {
    type: String,
    required: [true, "Please add a menu"],
  },
});

module.exports = mongoose.model("restaurant", restaurantSchema);
