import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import restaurantService from "./restaurantsService";
const initialState = {
  restaurants: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new Restaurant
export const createRestaurant = createAsyncThunk(
  "restaurants/create",
  async (restaurantData, thunkAPI) => {
    try {
      return await restaurantService.createRestaurant(restaurantData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all Restaurants
export const getRestaurants = createAsyncThunk(
  "restaurants/getAll",
  async (_, thunkAPI) => {
    try {
      // return await restaurantService.getRestaurants();
      return await restaurantService.getRestaurants();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get restaurant details
export const getRestaurantDetails = createAsyncThunk(
  "restaurants/details",
  async (restaurantId, thunkAPI) => {
    try {
      return await restaurantService.restaurantDetails(restaurantId);
      // return await restaurantService.restaurantDetails(restaurantId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete restaurant
export const deleteRestaurant = createAsyncThunk(
  "restaurants/delete",
  async (id, thunkAPI) => {
    try {
      return await restaurantService.deleteRestaurant(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// edit restaurant
export const editRestaurant = createAsyncThunk(
  "restaurnts/edit",
  async (restaurantId, restaurantDetails, thunkAPI) => {
    try {
      return await restaurantService.editRestaurant(
        restaurantId,
        restaurantDetails
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRestaurant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.restaurants.push(action.payload);
      })
      .addCase(createRestaurant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.restaurants = action.payload;
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getRestaurantDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRestaurantDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.restaurants = action.payload;
      })
      .addCase(getRestaurantDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRestaurant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.restaurants = state.restaurants.filter(
          (restaurant) => restaurant._id !== action.payload.id
        );
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editRestaurant.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editRestaurant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.restaurants = action.payload;
      })
      .addCase(editRestaurant.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = restaurantSlice.actions;
export default restaurantSlice.reducer;
