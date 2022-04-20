import axios from "axios";
import React, { useState } from "react";
import address from "../../BackendAddress"

const CreateQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");

  const createquiz = () => {
    axios
      .post(`${address}/quiz`, { name, description, hours })
      .then((data) => alert("quiz created successfully"))
      .catch((err) => alert("Please Enter Valid Details"));
  };

  return (
    <div>
      <label htmlFor="">
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Description:{" "}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Hours:{" "}
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </label>
      <button onClick={createquiz}>Create Quiz</button>
    </div>
  );
};

export default CreateQuiz;
