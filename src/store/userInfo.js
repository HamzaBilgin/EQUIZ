import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userLoginInfo: {},
  },
  reducers: {
    setUserInfo(state, action) {
      state.userLoginInfo = action.payload;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
