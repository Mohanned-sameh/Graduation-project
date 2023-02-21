import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminAuthService from "./adminAuthService";

const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register Admin
export const registerAdmin = createAsyncThunk(
  "auth/register",
  async (admin, thunkAPI) => {
    try {
      return await adminAuthService.registerAdmin(admin);
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
// Login Admin
export const loginAdmin = createAsyncThunk(
  "auth/login",
  async (admin, thunkAPI) => {
    try {
      return await adminAuthService.loginAdmin(admin);
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
// Logout admin
export const logoutAdmin = createAsyncThunk("/auth/logout", async () => {
  await adminAuthService.logoutAdmin();
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.admin = null;
      });
  },
});
