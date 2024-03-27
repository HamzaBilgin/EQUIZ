import React, { useRef, createContext, usestate, useMemo } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../store/userInfo";

import axios from "axios";
const errorConfig = {
  title: "Error!",
  content: (
    <>
      <p>Message: Unsuccess</p>
    </>
  ),
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const validateEmail = (_, value) => {
  const pattern = /^([^@]+)@([^@]+\.[^@]+)$/;
  if (!pattern.test(value)) {
    return Promise.reject(
      "Please enter a valid email (e.g. example@example.com)!"
    );
  }
  return Promise.resolve();
};

const LoginForm = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();

  const navigateHomePage = () => {
    navigate(`..`);
  };

  // const getUser = async (email) => {
  //   fetch(`http://localhost:3000/user?email=${email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // };
  const getUser2 = async (email) => {
    const data = await axios.get(`http://localhost:3000/user?email=${email}`);
    return data;
  };
  const onFinish = async (values) => {
    // console.log(userLoginInfo);
    const data = await getUser2(values.user.email);

    validateUser(values.user, data)
      .then((successMessage) => {
        dispatch(authActions.login());
        const isAuthenticated = JSON.stringify(true);

        localStorage.setItem("isAuthenticated", isAuthenticated);
        localStorage.setItem("userLoginInfo", JSON.stringify(data));
        navigateHomePage();
        formRef.current.resetFields();
      })
      .catch((errorMessage) => {
        modal.error({
          ...errorConfig,

          okButtonProps: {
            className: "ant-btn-error",
            style: {
              color: "rgba(255, 255, 255, 1)",
              backgroundColor: "rgba(255, 0, 0, 0.88)",
            },
          },
        });
      });
  };
  const validateUser = (inputUser, data) => {
    const password = data.data[0].password;
    return new Promise((resolve, reject) => {
      if (data != null && password == inputUser.password) {
        dispatch(userInfoActions.setUserInfo(data.data[0]));
        resolve("Login Succesful");
      } else {
        reject("Please control email and password");
      }
    });
  };
  return (
    <div className="w-[300px] m-auto mt-6">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
        ref={formRef}
      >
        <Form.Item
          name={["user", "email"]}
          rules={[
            {
              type: "email",
              required: true,
              validator: validateEmail,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name={["user", "password"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <div className="flex justify-between">
          <Form.Item>
            <Form.Item
              name={["user", "remember"]}
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-full !hover:bg-sky-700 text-black bg-[#1677ff]"
          >
            Log in
          </Button>
          Or{" "}
          <Link to="/register" relative="path">
            <span>register now!</span>
          </Link>
        </Form.Item>{" "}
        {contextHolder}
      </Form>
    </div>
  );
};
export default LoginForm;
