import axios from "axios";
const API_ADMIN_URL = "/api/admins/";

const registerAdmin = async (adminData) => {
  const response = await axios.post(API_ADMIN_URL, adminData);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const loginAdmin = async (adminData) => {
  const response = await axios.post(API_ADMIN_URL + "login", adminData);

  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
  }
  return response.data;
};

const logoutAdmin = () => {
  localStorage.removeItem("admin");
};

const adminAuthService = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
};

export default adminAuthService;
