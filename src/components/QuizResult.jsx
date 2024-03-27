import { Progress } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const QuizResult = () => {
  const quizResult = useSelector((state) => state.quizResult.quizResult);
  const totalScore = quizResult.data.reduce((score, item) => {
    if (item.answer === item.correctAnswer) {
      score++;
    }
    return score;
  }, 0);
  console.log(quizResult);
  return (
    <div className="bg-slate-400">
      <div>QUIZ RESULT</div>
      <div>
        <span>{quizResult.categoryName}</span>
        <Progress type="circle" percent={10} />
      </div>
    </div>
  );
};

export default QuizResult;
