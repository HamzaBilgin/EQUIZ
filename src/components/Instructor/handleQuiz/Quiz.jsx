import { React, useState } from "react";
import { Button, Card, Modal } from "antd";
import QuizQuestion from "./QuizQuestion";

const quizOperations = [
  {
    id:1,
    img: "https://static.vecteezy.com/system/resources/thumbnails/005/083/209/small_2x/editable-flat-outline-design-of-quiz-icon-vector.jpg",
    title: "Create New Quiz",
  },
  {
    id:2,
    img: "https://cdn-icons-png.freepik.com/512/10650/10650201.png",
    title: "Edit Quiz",
  },
  {
    id:3,
    img: "https://cdn-icons-png.freepik.com/512/10781/10781634.png",
    title: "Delete Quiz",
  },
];

const Quiz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          <Button onClick={showModal}>{operation.title}</Button>
        </Card>
      ))}
      <Modal
        title="Creaet New Quiz"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <QuizQuestion handleCancel={handleCancel}/>
      </Modal>
    </div>
  );
};

export default Quiz;
