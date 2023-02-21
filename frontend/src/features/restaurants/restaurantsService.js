import axios from "axios";

const API_URL = "/api/restaurants/";

// Create new restaurant
const createRestaurant = async (restaurantData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, restaurantData, config);
  return response.data;
};

// Get restaurants
const getRestaurants = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get restaurant Details
const restaurantDetails = async (restaurantId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, restaurantId, config);
  return response.data;
};

// Delete a restaurant
const deleteRestaurant = async (restaurantId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + restaurantId, config);
  return response.data;
};

// Edit a restaurant
const editRestaurant = async (restaurantId, restaurantDetails, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + restaurantId, config);
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
