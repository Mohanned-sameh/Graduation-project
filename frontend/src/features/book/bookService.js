import axios from "axios";

const API_URL = "/api/order";

//create new order
const createOrder = async (orderData) => {
  try {
    const response = await axios.post(API_URL, orderData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Get order
const getOrder = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const editOrder = async (restaurantId, restaurantDetails) => {
  try {
    const response = await axios.put(API_URL + restaurantId, restaurantDetails);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteOrder = async (restaurantId) => {
  try {
    const response = await axios.delete(API_URL, restaurantId);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const orderService = {
  getOrder,
  createOrder,
  deleteOrder,
  editOrder,
};

export default orderService;
