import { createSlice } from "@reduxjs/toolkit";

let userLoginInfo = localStorage.getItem("userLoginInfo")
  ? JSON.parse(localStorage.getItem("userLoginInfo"))
  : {};

const initialState = {
  userLoginInfo:
    userLoginInfo && userLoginInfo.data && userLoginInfo.data.length > 0
      ? userLoginInfo.data[0]
      : {},
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userLoginInfo: initialState,
  },
  reducers: {
    setUserInfo(state, action) {
      state.userLoginInfo = action.payload;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice.reducer;
