import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import address from "../BackendAddress";


import QuizSingleQuestion from "./QuizSingleQuestion";

const QuizPage = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);

  useLayoutEffect(() => {
    axios
      .get(`${address}/question?quiz=${id}`)
      .then((data) => {
        setQuestions(data.data);
      })
      .catch((err) => alert(err.message));
  }, [id]);
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <QuizSingleQuestion
            index={index}
            question={question}
            key={question._id}
 
          />
        );
      })}
    </div>
  );
};

export default QuizPage;
