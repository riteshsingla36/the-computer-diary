import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import address from "../../BackendAddress";

const CreateQuestion = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [isTrue1, setIsTrue1] = useState(false);
  const [isTrue2, setIsTrue2] = useState(false);
  const [isTrue3, setIsTrue3] = useState(false);
  const [isTrue4, setIsTrue4] = useState(false);
  const [explaination, setExplaination] = useState("");

  const createQuestion = () => {
    axios
      .post(`${address}/question`, {
        quiz: id,
        question,
        options: [
          { answer: answer1, isTrue: isTrue1 },
          { answer: answer2, isTrue: isTrue2 },
          { answer: answer3, isTrue: isTrue3 },
          { answer: answer4, isTrue: isTrue4 },
        ],
        explaination: explaination,
      })
      .then((data) => alert("question created successfully"))
      .catch((err) => alert("some error occured"));
  };
  return (
    <div>
      <label htmlFor="">
        Question:{" "}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Name:{" "}
        <input
          type="text"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
        />
      </label>
      <select
        name=""
        id=""
        value={isTrue1}
        onChange={(e) => setIsTrue1(e.target.value === "true" ? true : false)}
      >
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <label htmlFor="">
        Name:{" "}
        <input
          type="text"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
        />
      </label>
      <select
        name=""
        id=""
        value={isTrue2}
        onChange={(e) => setIsTrue2(e.target.value === "true" ? true : false)}
      >
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <label htmlFor="">
        Name:{" "}
        <input
          type="text"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
        />
      </label>
      <select
        name=""
        id=""
        value={isTrue3}
        onChange={(e) => setIsTrue3(e.target.value === "true" ? true : false)}
      >
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <label htmlFor="">
        Name:{" "}
        <input
          type="text"
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
        />
      </label>
      <select
        name=""
        id=""
        value={isTrue4}
        onChange={(e) => setIsTrue4(e.target.value === "true" ? true : false)}
      >
        <option value="false">false</option>
        <option value="true">true</option>
      </select>

      <label htmlFor="">
        Explaniation:{" "}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={question}
          onChange={(e) => setExplaination(e.target.value)}
        />
      </label>
      <button onClick={createQuestion}>Create Question</button>
    </div>
  );
};

export default CreateQuestion;
