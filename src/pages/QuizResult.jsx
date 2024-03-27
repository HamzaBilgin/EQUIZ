import React from "react";
import { useSelector } from "react-redux";
import QuizResult from "../components/QuizResult";

const QuizResultPage = () => {
  return (
    <div className="mt-[70px] max-w-screen-xl w-full m-auto">
      <QuizResult />
    </div>
  );
};

export default QuizResultPage;
