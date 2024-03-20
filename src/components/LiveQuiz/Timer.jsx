import React, { useEffect, useState } from "react";

const Timer = ({ dbQuiz }) => {
  const [seconds, setSeconds] = useState(dbQuiz.quizTimer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="mt-5 absolute right-[200px] text-3xl">{seconds}</div>
    </div>
  );
};

export default Timer;
