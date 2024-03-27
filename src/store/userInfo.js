import { createSlice } from "@reduxjs/toolkit";

let userLoginInfo = localStorage.getItem("userLoginInfo")
  ? JSON.parse(localStorage.getItem("userLoginInfo"))
  : {};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userLoginInfo: userLoginInfo.data[0],
  },
  reducers: {
    setUserInfo(state, action) {
      state.userLoginInfo = action.payload;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
