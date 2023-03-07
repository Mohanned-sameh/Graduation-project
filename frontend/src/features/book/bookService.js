import axios from "axios";

const API_URL = "/api/order/";

//create new order
const createOrder = async (orderData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, orderData, config);
  return response.data;
};

// Get order
const getOrder = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const editOrder = async (orderId, restaurantDetails, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + orderId,
    restaurantDetails,
    config
  );
  return response.data;
};

const deleteOrder = async (orderId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + orderId, config);
  return response.data;
};
const orderService = {
  getOrder,
  createOrder,
  deleteOrder,
  editOrder,
};

export default orderService;
