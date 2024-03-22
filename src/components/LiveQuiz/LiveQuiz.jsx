import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Quizzes } from "../../mockData/home/mockQuizQuestions";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
const initialState = {
  _id: null,
  categoryName: "",
  question: [],
  score: 0,
};
const LiveQuiz = () => {
  const [quizResult, setQuizResult] = useState(initialState);

  const [count, setCount] = useState(0);
  const [finishModal, setFinishModal] = useState(0);

  const params = useParams();

  const dbQuiz = Quizzes.find((data) => {
    return data.category_name === params.categoryName && data.id == params.id;
  });

  return (
    <div className="liveQuiz w-full flex justify-center relative">
      <Timer dbQuiz={dbQuiz} />
      <QuestionCard
        dbQuiz={dbQuiz}
        quizResult={quizResult}
        setQuizResult={setQuizResult}
        count={count}
        setCount={setCount}
        finishModal={finishModal}
        setFinishModal={setFinishModal}
      />
    </div>
  );
};

export default LiveQuiz;
