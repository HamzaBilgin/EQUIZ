import React from "react";
import { Rate } from "antd";
import animationStyles from "../../ModüleCss/Animations.module.css";
import styles from "../../ModüleCss/Home.module.css";
import { FaArrowRight } from "react-icons/fa6";
import QuizItem from "../Common/QuizItem";
import { Link } from "react-router-dom";

const HomeCourses = ({ data }) => {
  const { category_name, quizzes } = data;
  return (
    <div className="category border p-5 mb-4 ">
      <h1 className="mb-2">{category_name}</h1>
      <div className={`categoryQuizList ${styles.homeMain}`}>
        {quizzes.map((data, index) => (
          <QuizItem category_name={category_name} data={data} key={index} />
        ))}

        <div
          className="flex justify-center align-middle items-center mr-3  rounded-xl    text-center "
          onClick={() => console.log(category_name)}
        >
          <div
            className={`flex justify-center align-middle items-center p-3 cursor-pointer ${animationStyles.midleToRight}`}
          >
            <span className="mr-2">Organik Kimya1</span>
            <FaArrowRight />
          </div>
          {/* <Link
            to={`/${category_name}`}
            relative="path"
            className={`flex justify-center align-middle items-center p-3 cursor-pointer ${animationStyles.midleToRight}`}
          >
            <span>Log in</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
