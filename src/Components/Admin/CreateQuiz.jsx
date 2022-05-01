import axios from "axios";
import React, { useState } from "react";
import address from "../../BackendAddress";

const CreateQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [image, setImage] = useState();

  const createQuiz = (e) => {
    e.preventDefault();

    console.log(image);
    var formData = new FormData();

    formData.set("name", name);
    formData.set("hours", hours);
    formData.set("description", description);
    formData.set("image", image);
    axios
      .post(`${address}/quiz`, formData)
      .then((data) => alert("quiz created successfully"))
      .catch((err) => alert("Please Enter Valid Details"));
  };

  const handleimagechange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    // console.log(e.target.files[0])
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={createQuiz}>
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
        <label>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            name="image"
            id=""
            onChange={handleimagechange}
          />
        </label>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;
