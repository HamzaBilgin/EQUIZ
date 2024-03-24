import { React, useState } from "react";
import { Form, Input, Radio, Space, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const QuizQuestion = ({ handleCancel }) => {
  const [questionOption, setQuestionOption] = useState([
    { id: "A", value: "", correct: false },
    { id: "B", value: "", correct: false },
    { id: "C", value: "", correct: false },
    { id: "D", value: "", correct: false },
  ]);

  const handleInputChange = (id, newValue) => {
    const newOptions = questionOption.map((option) => {
      if (option.id === id) {
        return { ...option, value: newValue };
      }
      return option;
    });
    setQuestionOption(newOptions);
  };

  return (
    <Form
      {...formItemLayout}
      variant="filled"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="Question Area"
        name="questionArea"
        rules={[
          {
            required: true,
            message: "Soru Alanı Boş Bırakılamaz ve 50 karakterden az olamaz!",
            min: 50,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Radio.Group name="radiogroup" defaultValue={1}>
        <Space direction="vertical">
          {questionOption.map((option) => (
            <Space key={option.id}>
              <Radio value={option.id}>{option.id}</Radio>
              <Form.Item
                name={option.id}
                rules={[
                  {
                    required: true,
                    message: "Cevap seçenekleri boş bırakılamaz!",
                  }
                ]}
                style={{
                  marginBottom:0,
                  width:600
                }}
              >
                <Input
                  value={option.value}
                  onChange={(e) => handleInputChange(option.id, e.target.value)}
                />
              </Form.Item>
            </Space>
          ))}
        </Space>
      </Radio.Group>
      <Form.Item
        wrapperCol={{
          offset: 14,
          span: 4,
        }}
      >
        <Space>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="default" htmlType="submit">
            Add Question
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default QuizQuestion;
