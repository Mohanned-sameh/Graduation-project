import axios from "axios";

const API_URL = "/api/restaurants/";

// Create new restaurant
const createRestaurant = async (restaurantData) => {
  try {
    const response = await axios.post(API_URL, restaurantData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.error(err);
  }
};

// Get restaurants
const getRestaurants = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.error(err);
  }
};

// Get restaurant Details
const restaurantDetails = async (restaurantId) => {
  try {
    const response = await axios.get(API_URL + restaurantId);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.error(err);
  }
};

// Delete a restaurant
const deleteRestaurant = async (restaurantId) => {
  try {
    const response = await axios.delete(API_URL + restaurantId);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.error(err);
  }
};

// Edit a restaurant
const editRestaurant = async (restaurantId, restaurantDetails) => {
  const response = await axios.put(API_URL + restaurantId, restaurantDetails);
  return response.data;
};

const restaurantService = {
  restaurantDetails,
  editRestaurant,
  createRestaurant,
  getRestaurants,
  deleteRestaurant,
};
export default restaurantService;
