import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Form, Input, Radio, Modal } from "antd";
const isExistingEmail = true;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
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
/* eslint-enable no-template-curly-in-string */
const validatePhoneNumber = (_, value) => {
  const pattern = /^0[0-9]{3}[0-9]{3}[0-9]{4}$/;
  if (!pattern.test(value)) {
    return Promise.reject(
      "Please enter a valid phone number (e.g. 05551234567)!"
    );
  }
  return Promise.resolve();
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

const RegisterForm = () => {
  const formRef = useRef();
  const [userData, setUserData] = useState({});
  const [modal, contextHolder] = Modal.useModal();
  const errorConfig = {
    title: "Error!",
    content: (
      <>
        <p>Message: Unsuccess</p>
      </>
    ),
  };

  const onFinish = async ({ password, user }) => {
    // setUserData({ password, ...user });
    formRef.current.resetFields();
    const data = await axios.get(
      `http://localhost:3000/user?email=${user.email}`
    );

    if (data.data[0]) {
      modal.error({
        title: "Error!",
        content: (
          <>
            <p>Registered User</p>
          </>
        ),

        okButtonProps: {
          className: "ant-btn-error",
          style: {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(255, 0, 0, 0.88)",
          },
        },
      });
      return;
    }
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, ...user }),
    });
    setUserData({});
  };
  // const isExistUser = async (email) => {};
  const handleSubmit = () => {
    formRef.current.submit();
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    formRef.current
      .validateFields()
      .then(() => {
        setModalText("Do you confirm the transaction?");
        setOpen(true);
      })
      .catch((err) => {
        console.error("Form validation failed:", err);
      });
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    handleSubmit();
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);

      setOpen(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="w-[600px] m-auto mt-6">
      <h1 className="text-center pb-8">Are you ready?</h1>
      <Form
        initialValues={{
          user: {
            Role: "student",
          },
        }}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
        ref={formRef}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "surname"]}
          label="Surname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              validator: validateEmail,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phoneNumber"]}
          label="Phone Number"
          rules={[
            {
              type: "text",
              required: true,
              validator: validatePhoneNumber,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "Role"]} label="Radio">
          <Radio.Group>
            <Radio value="student"> Student </Radio>
            <Radio value="teacher"> Teacher </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 21,
          }}
        >
          <Button type="default" onClick={showModal}>
            Submit
          </Button>
          <Modal
            title="Register : "
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okButtonProps={{
              className: "ant-btn-default",
              style: {
                color: "rgba(0, 0, 0, 0.88)",
              },
              children: "Custom Ok Text",
            }}
          >
            <p>{modalText}</p>
          </Modal>
        </Form.Item>
      </Form>
      {contextHolder}
    </div>
  );
};

export default RegisterForm;
