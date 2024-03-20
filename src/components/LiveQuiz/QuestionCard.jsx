import { Button } from "antd";
import React, { useRef, useState } from "react";

const QuestionCard = ({
  dbQuiz,
  quizResult,
  setQuizResult,
  count,
  setCount,
  finishModal,
  setFinishModal,
}) => {
  // let score = 0;
  const { category_name, id, questions, length, quizTimer } = dbQuiz;

  let answerKey = ["A", "B", "C", "D"];

  const approvedChoice = (e) => {
    setQuizResult({ ...quizResult, categoryName: category_name });
    const checkAnswer = e.target.value == questions[count]?.correctAnswer;
    if (checkAnswer) {
      setQuizResult({ ...quizResult, score: quizResult.score + 100 });
    }
    setQuizResult({
      ...quizResult,
      question: [
        ...quizResult.question,
        {
          questionNo: count,
          questionLabel: questions[count]?.question,
          answer: e.target.value,
          correctAnswer: dbQuiz.questions[count]?.correctAnswer,
        },
      ],
    });

    if (count !== 9) {
      setCount(count + 1);
    }
  };
  return (
    <div className="questionCard flex flex-col relative ">
      <div className="w-[1000px] text-2xl  mt-10 h-[100px]">
        {count + 1}/{questions.length} - {questions[count]?.question}
      </div>
      <div className="w-1/2 flex flex-col mt-10">
        {questions[count]?.options?.map((option, index) => (
          <button
            onClick={approvedChoice}
            key={index}
            value={option}
            className="border p-6 text-left mb-5 hover:bg-green-500"
          >
            {answerKey[index]} : {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
