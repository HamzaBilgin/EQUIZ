import React, { useEffect, useMemo, useRef, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Checkbox, Form, Input, Modal, notification } from "antd";
import animationStyles from "../../ModüleCss/Animations.module.css";
import axios from "axios";
const Header = () => {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const userLoginInfo = useSelector(
    (state) => state.userInfoReducer.userLoginInfo
  );
  const serchQuizRef = useRef();
  const [liveInputCollapsed, setLiveInputCollapsed] = useState(null);
  const [liveQuizStartError, setLiveQuizStartError] = useState(false);
  const checkQuizExist = async (id) => {
    const data = await axios.get(`http://localhost:3000/quizzes?live_id=${id}`);

    return new Promise((resolve, reject) => {
      if (data.data.length != 0) {
        resolve(data.data);
      } else {
        reject(null);
      }
    });
  };
  const startQuiz = async () => {
    // const quiz = await axios.get(
    //   `http://localhost:3000/quizzes?live_id=${serchQuizRef.current.value}`
    // );
    checkQuizExist(serchQuizRef.current.value)
      .then((item) => {
        setLiveQuizStartError(false);
        console.log(item);
      })
      .catch((item) => {
        setLiveQuizStartError(!liveQuizStartError);
      });
  };
  // login successful message start
  const [api, contextHolder2] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Login Successfull`,
      description: `Welcome, ${userLoginInfo.name}!`,
      placement,
    });
  };

  useEffect(() => {
    if (isLogin) {
      openNotification("topLeft");
    }
  }, [isLogin]);
  return (
    <header
      className={`fixed w-full top-0 left-0 bg-red-300 z-10 absolute ${
        liveQuizStartError === true
          ? animationStyles.upToDownNavbar
          : animationStyles.downToUpNavbar
      }`}
    >
      <nav className=" border-gray-200 px-4 lg:px-4">
        <div className="h-14 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to=".." relative="path" className="w-[300px]">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              EQuiz
            </span>
          </Link>

          <div className="flex items-center lg:order-2 w-[300px] justify-end">
            {!isLogin && (
              <>
                <Link
                  to="/login"
                  relative="path"
                  className="text-gray-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-indigo-900/50 hover:text-white"
                >
                  <span>Log in</span>
                </Link>

                <Link
                  to="/register"
                  relative="path"
                  className="text-gray-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-indigo-900/50 hover:text-white"
                >
                  <span>Register</span>
                </Link>
              </>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <div
              className="border hidden  items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <button
                className="px-2 "
                onClick={() =>
                  setLiveInputCollapsed(
                    liveInputCollapsed === null ? true : !liveInputCollapsed
                  )
                }
              >
                Live Quiz
              </button>
              <div
                className={`w-0 overflow-hidden ${
                  liveInputCollapsed === null
                    ? ""
                    : liveInputCollapsed
                    ? `pl-2 ${animationStyles.extendToRight}`
                    : animationStyles.collepseToLeft
                } flex`}
              >
                <input
                  className="w-[160px]"
                  type="text"
                  placeholder="Please enter quiz id"
                  ref={serchQuizRef}
                />
                <button className="w-[50px] px-2" onClick={startQuiz}>
                  start
                </button>
              </div>
            </div>
            <div
              className={`w-full absolute text-center ${
                liveQuizStartError
                  ? animationStyles.upToDownDropDown
                  : animationStyles.downToUpDropDown
              }`}
            >
              Quiz bulunamadı{" "}
            </div>
          </div>
        </div>
      </nav>
      {contextHolder2}
    </header>
  );
};

export default Header;
