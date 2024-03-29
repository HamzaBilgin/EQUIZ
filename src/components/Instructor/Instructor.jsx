import React from "react";
import { Link } from "react-router-dom";
import { QuizUI, ResultUI } from "./InstructorUI";

const Instructor = () => {
  return (
    <div className="flex flex-row justify-center items-center h-full w-full gap-40">
      <QuizUI />
      <ResultUI />
    </div>
  );
};

export default Instructor;
