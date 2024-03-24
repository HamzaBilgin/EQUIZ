import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import quizResultSlice from "./quizResult";

const store = configureStore({
  reducer: { auth: authSlice, quizResult: quizResultSlice },
});

export default store;
