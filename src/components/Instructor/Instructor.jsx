import React from "react";
import { Link } from "react-router-dom";
import { QuizUI, ResultUI } from "./InstructorUI";

const Instructor = () => {
  return (
    <div className="flex flex-row justify-center items-center h-full w-full gap-3">
      <Link
        to="/instructor/quiz"
        relative="path"
        className="p-5 cursor-pointer m-2 "
      >
        <QuizUI />
      </Link>
      <Link
        to="/instructor/result"
        relative="path"
        className="p-5  cursor-pointer m-2"
      >
        <ResultUI />
      </Link>
    </div>
  );
};

export default Instructor;
