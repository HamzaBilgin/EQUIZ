import React from "react";
import { Link } from "react-router-dom";

const Instructor = () => {
  return (
    <div className="flex flex-row justify-center items-center h-full w-full">
      <Link
        to={`/instructor/quiz`}
        relative="path"
        className="p-5 border rounded-full cursor-pointer m-2"
      >
        <span>QUIZ</span>
      </Link>
      <div className="p-5 border rounded-full cursor-pointer">RESULT</div>
    </div>
  );
};

export default Instructor;
