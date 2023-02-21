import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import restaurantReducer from "../features/restaurants/restaurantsSlice";
// import adminAuthReducer from "../features/auth/authAdmin/adminAuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer,
    // adminAuth: adminAuthReducer,
  },
});
export default store;
