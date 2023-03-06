import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import restaurantReducer from "../features/restaurants/restaurantsSlice";
import bookReducer from "../features/book/bookSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer,
    book: bookReducer,
  },
});
