import React from "react";
import { useSelector } from "react-redux";

const QuizResultPage = () => {
  const quizResult = useSelector((state) => state.quizResult.quizResult);
  console.log(quizResult);
  return (
    <div className="mt-[70px] max-w-screen-xl w-full m-auto">
      QuizResultPage
    </div>
  );
};

export default QuizResultPage;
