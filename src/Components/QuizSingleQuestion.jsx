import React, { useState } from "react";
import Quizquestion from "./Quizquestion";
import "../Css/quizSingleQuestion.css";

const QuizSingleQuestion = ({ question, index }) => {
  const [check, setCheck] = useState("");
  return (
    <div className="quiz-question">
      <span>{index + 1 + ". " + question.question}</span>
      <br />
      {question.options.map((option, index) => {
        return (
          <Quizquestion
            option={option}
            question={question.question}
            setCheck={setCheck}
            key={index}
          />
        );
      })}
      {check !== "" ? <span>{check ? "correct" : "incorrect"}</span> : ""}
    </div>
  );
};

export default QuizSingleQuestion;
