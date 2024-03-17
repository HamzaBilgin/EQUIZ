import React from "react";
import { Rate } from "antd";
const QuizItem = ({ data }) => {
  const { quiz_name, instructor, score, vote_count } = data;
  function roundNumber(value) {
    let enlargedNumber = Math.round(value * 100);

    if (enlargedNumber % 50 === 0) {
      return enlargedNumber / 100;
    } else if (enlargedNumber % 25 === 0) {
      return Math.ceil(enlargedNumber / 50) * 0.5;
    } else {
      return Math.round(value);
    }
  }

  return (
    <div className="mr-3 py-3 rounded-xl  border border-indigo-500 text-center transition-all hover:-translate-y-1 hover:shadow-[10px_10px_10px_rgba(0,0,0,0.3)] cursor-pointer">
      <h1>{quiz_name}</h1>
      <div>{instructor}</div>
      <Rate allowHalf disabled defaultValue={() => roundNumber(score)} />
      <div>puan : {score}/5</div>
      <div>Vote Count:{vote_count}</div>
      <div>
        puan : {score}/5 Vote Count:{vote_count}
      </div>
    </div>
  );
};

export default QuizItem;
