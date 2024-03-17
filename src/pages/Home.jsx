import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { quizCategory } from "../mockData/home/mainPageQuizes.js";
import HomeCourses from "../components/home/HomeCourses.jsx";

const HomePage = () => {
  return (
    <div className="mt-[70px] max-w-screen-xl w-full m-auto">
      <Fragment>
        <div className="categoryList">
          {quizCategory.map((data, index) => (
            <HomeCourses data={data} key={index} />
          ))}
        </div>
      </Fragment>
    </div>
  );
};

export default HomePage;
