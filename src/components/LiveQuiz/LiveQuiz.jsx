import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Quizzes } from "../../mockData/home/mockQuizQuestions";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
import { useSelector, useDispatch } from "react-redux";
import { quizResultActions } from "../../store/quizResult";
const initialState = {
  _id: null,
  categoryName: "",
  questionsAnswers: [],
  score: 0,
};
const LiveQuiz = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsAnswers, setQuestionsAnswers] = useState([]);
  const params = useParams();
  const dbQuiz = Quizzes.find((data) => {
    return data.category_name === params.categoryName && data.id == params.id;
  });

  useEffect(() => {
    const newQuestionsAnswers = Array.from(
      { length: params.totalQuestions },
      (_, i) => ({
        questionNo: i + 1,
        questionLabel: dbQuiz.questions[i]?.question,
        answer: "",
        correctAnswer: dbQuiz.questions[i]?.correctAnswer,
      })
    );

    setQuestionsAnswers(newQuestionsAnswers);
  }, [params.totalQuestions, dbQuiz]);

  const updateQuestionsAnswers = (id, answer) => {
    const findProduct = questionsAnswers.find((qu) => qu.questionNo === id);

    setQuestionsAnswers(
      questionsAnswers.map((qu) => {
        if (qu.questionNo === id) {
          return {
            ...qu,
            answer: answer,
          };
        }
        return qu;
      })
    );
  };
  const findValue = (id) => {
    const findProduct = questionsAnswers.find((qu) => qu.questionNo === id);

    return findProduct;
  };
  const navigate = useNavigate();

  const finishQuiz = () => {
    dispatch(quizResultActions.setResult({ data: questionsAnswers }));
    navigate("/liveQuiz/result");
  };
  return (
    <div className="liveQuiz w-full flex justify-center relative">
      <Timer dbQuiz={dbQuiz} />
      <div className="bg-red-500 mt-5 absolute right-[60px] text-3xl">
        <button className="px-4" onClick={finishQuiz}>
          Finish
        </button>
      </div>
      <QuestionCard
        updateQuestionsAnswers={updateQuestionsAnswers}
        dbQuiz={dbQuiz}
        findValue={findValue}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default LiveQuiz;
