import axios from "axios";
import React, { useState } from "react";
import address from "../../BackendAddress";

const CreateYoutube = () => {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [link, setLink] = useState("");

  const createYoutube = () => {
    axios
      .post(`${address}/youtube`, { name, hours, link })
      .then((data) => alert("successfully created youtube"))
      .catch((err) => alert(err.message));
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
        Link:{" "}
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
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
      <button onClick={createYoutube}>Create Youtube </button>
    </div>
  );
};

export default CreateYoutube;
