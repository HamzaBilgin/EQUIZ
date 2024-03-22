import { Button } from "antd";
import React, { useRef, useState } from "react";
import { Input, Radio, Space } from "antd";

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
  //Answer radio start
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  //Answer radio end
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

      <Radio.Group
        onChange={onChange}
        value={value}
        className="ml-12 !box-border"
      >
        <Space direction="vertical " className=" aaa box-border">
          {questions[count]?.options?.map((option, index) => (
            <Radio
              key={index}
              value={option}
              className="answerOptions !box-border text-xl items-center mb-2  py-2 pr-5 hover:border-y-2 hover:border-r-2  hover:rounded-r-full"
            >
              {answerKey[index]} : {option}
            </Radio>
          ))}
          d
        </Space>
      </Radio.Group>
      <div className="bg-red-500 absolute bottom-20 flex justify-around w-full">
        <button>Previous</button>
        <button>Next</button>
      </div>
      {/* <div className="w-1/2 flex flex-col mt-10">
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
      </div> */}
    </div>
  );
};

export default QuestionCard;
