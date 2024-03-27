import React, { useRef, createContext, usestate, useMemo } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const errorConfig = {
  title: "Error!",
  content: (
    <>
      <p>MEssage: Unsuccess</p>
    </>
  ),
};
const gelenUser = {
  name: "Hamza",
  email: "hamza@hamza.com",
  password: "123",
  role: "teacher",
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
  // const getUser = async (email) => {
  //   fetch(`http://localhost:3000/user?email=${email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     })
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // };
  const navigateHomePage = () => {
    navigate(`..`);
  };
  const onFinish = (values) => {
    validateUser(values.user, gelenUser)
      .then((successMessage) => {
        dispatch(authActions.login());

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
  const validateUser = (inputUser, dbUser) => {
    return new Promise((resolve, reject) => {
      if (dbUser != null && dbUser.password == inputUser.password) {
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
