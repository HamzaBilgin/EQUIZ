import { createSlice } from "@reduxjs/toolkit";

const initialQuizResultState = {
  quizResult: null,
  // categoryName: "",
  // questionsAnswers: [],
  // score: 0,
};

const quizResultSlice = createSlice({
  name: "quizResult",
  initialState: initialQuizResultState,
  reducers: {
    setResult(state, action) {
      state.quizResult = action.payload.data;
    },
  },
});

export const quizResultActions = quizResultSlice.actions;

export default quizResultSlice.reducer;
