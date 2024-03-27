import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { AiOutlineLogout } from "react-icons/ai";
import { authActions } from "../../store/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
//  const userLoginInfo = useSelector(
//     (state) => state.userInfoReducer.userLoginInfo
//   );
let sliderItem = [];
// const studentItems = [
//   getItem("Hamza Bilgin", "1", <UserOutlined />, [
//     getItem("Tom", "11"),
//     getItem("Bill", "12"),
//     getItem("Alex", "13"),
//   ]),
//   getItem("Quizzes", "Quizzes", <AiOutlineLogout />),
//   getItem("QuizResults", "QuizResults", <AiOutlineLogout />),
//   getItem("Logout", "Logout", <AiOutlineLogout />),
// ];
// const ınstructorItems = [
//   getItem("a", "1", <UserOutlined />, [
//     getItem("Tom", "11"),
//     getItem("Bill", "12"),
//     getItem("Alex", "13"),
//   ]),
//   getItem("Make Quiz", "makeQuiz", <AiOutlineLogout />),
//   getItem("Quizzes", "Quizzes", <AiOutlineLogout />),
//   getItem("Istatistic", "Istatistic", <AiOutlineLogout />),
//   getItem("Logout", "Logout", <AiOutlineLogout />),
// ];
const ProfilSiderbar = () => {
  const userLoginInfo = useSelector(
    (state) => state.userInfoReducer.userLoginInfo
  );

  sliderItem = [
    getItem(userLoginInfo.name, "1", <UserOutlined />, [
      getItem("Tom", "11"),
      getItem("Bill", "12"),
      getItem("Alex", "13"),
    ]),
  ];
  if (userLoginInfo.role === "teacher") {
    sliderItem = [
      ...sliderItem,
      getItem("Make Quiz", "makeQuiz", <AiOutlineLogout />),
      getItem("Quizzes", "Quizzes", <AiOutlineLogout />),
      getItem("Istatistic", "Istatistic", <AiOutlineLogout />),
      getItem("Logout", "Logout", <AiOutlineLogout />),
    ];
  } else {
    sliderItem = [
      ...sliderItem,
      getItem("Quizzes", "Quizzes", <AiOutlineLogout />),
      getItem("QuizResults", "QuizResults", <AiOutlineLogout />),
      getItem("Logout", "Logout", <AiOutlineLogout />),
    ];
  }

  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const hoverSideBar = (e) => {
    setCollapsed(!collapsed);
  };
  const clickSideBarItem = (e) => {
    const item = e.key;
    switch (item) {
      case "Logout":
        dispatch(authActions.logout());
        setCollapsed(true);
        break;
      default:
      // console.log(e.key);
    }
  };

  return (
    <>
      {isLogin && (
        <Layout
          className="z-50  h-dvh  fixed  top-0 right-0 cursor-pointer"
          onMouseEnter={hoverSideBar}
          onMouseLeave={hoverSideBar}
        >
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical"></div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={clickSideBarItem}
              items={sliderItem}
            />
          </Sider>
          <div className="z-50  h-dvh  fixed  top-0 right-0 cursor-pointer"></div>
        </Layout>
      )}
    </>
  );
};
export default ProfilSiderbar;
