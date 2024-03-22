import React from "react";
import { Button, Card } from "antd";

const quizOperations = [
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/005/083/209/small_2x/editable-flat-outline-design-of-quiz-icon-vector.jpg",
    title: "Create New Quiz",
  },
  {
    img: "https://cdn-icons-png.freepik.com/512/10650/10650201.png",
    title: "Edit Quiz",
  },
  {
    img: "https://cdn-icons-png.freepik.com/512/10781/10781634.png",
    title: "Delete Quiz",
  },
];

const Quiz = () => {
  return (
    <div className="mt-[70px] w-full flex items-center justify-center h-[600px] mx-auto gap-24 ">
      {quizOperations.map((operation, i) => (
        <Card
          key={i}
          hoverable
          style={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          cover={
            operation.img ? (
              <img alt={operation.title} src={operation.img} />
            ) : null
          }
        >
          <Button>{operation.title}</Button>
        </Card>
      ))}
    </div>
  );
};

export default Quiz;
