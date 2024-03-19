import React from "react";
import { Button, Card } from "antd";

export const QuizUI = () => {
  return (
    <>
      <Card
        style={{
          width: 250,
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        cover={
          <img
            style={{ width: 150, height: 150, padding: 20 }}
            alt="quiz-png"
            src="https://cdn-icons-png.flaticon.com/512/10292/10292284.png"
          />
        }
      >
        <Button type="primary" ghost>
          Quiz İşlemleri
        </Button>
      </Card>
    </>
  );
};

export const ResultUI = () => {
  return (
    <Card
      style={{
        width: 250,
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      cover={
        <img
          style={{ width: 150, height: 150, padding: 20 }}
          alt="result-png"
          src="https://cdn-icons-png.flaticon.com/512/1589/1589689.png"
        />
      }
    >
      <Button type="primary" ghost>
        Sonuçları Görüntüle
      </Button>
    </Card>
  );
};
