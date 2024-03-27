import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("products/getUser", async (email) => {
  const res = await fetch(`http://localhost:3000/user?email=${email}`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return data;
});
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userLoginInfo: {},
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    setUserInfo(state, action) {
      state.userLoginInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productData = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
