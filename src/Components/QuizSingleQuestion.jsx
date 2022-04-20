import React, { useState } from "react";
import Quizquestion from "./Quizquestion";

const QuizSingleQuestion = ({ question, index }) => {
  const [check, setCheck] = useState("");
  return (
    <div>
      <p>{index + 1 + ". " + question.question}</p>
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
