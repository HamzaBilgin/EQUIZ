import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import quizResultSlice from "./quizResult";
import userInfoReducer from "./userInfo";

const store = configureStore({
  reducer: {
    auth: authSlice,
    quizResult: quizResultSlice,
    userInfoReducer: userInfoReducer,
  },
});

export default store;
