import React, { useState } from "react";
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
const ProfilSiderbar = () => {
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
        break;
      default:
        console.log(e.key);
    }
  };
  const logOut = () => {
    dispatch(authActions.logout());
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
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={clickSideBarItem}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
                {
                  key: "3",
                  icon: <UploadOutlined />,
                  label: "nav 3",
                },
                {
                  key: "Logout",
                  icon: <AiOutlineLogout />,
                  label: "Logout",
                },
              ]}
            />
          </Sider>
          <div className="z-50  h-dvh  fixed  top-0 right-0 cursor-pointer"></div>
        </Layout>
      )}
    </>
  );
};
export default ProfilSiderbar;
