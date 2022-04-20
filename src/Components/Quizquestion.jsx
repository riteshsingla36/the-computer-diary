import React, { useState } from "react";

const Quizquestion = ({ option, question, setCheck }) => {
  return (
    <div>
      <label htmlFor="">
        <input
          type="radio"
          name={question}
          onChange={() => setCheck(option.isTrue)}
        />
        {option.answer}
      </label>
      <br />
    </div>
  );
};

export default Quizquestion;
