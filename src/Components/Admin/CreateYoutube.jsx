import axios from "axios";
import React, { useEffect, useState } from "react";
import address from "../../BackendAddress";

const CreateYoutube = () => {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState();

  const createYoutube = (e) => {
    e.preventDefault();

    console.log(image);
    var formData = new FormData();

    formData.set("name", name);
    formData.set("hours", hours);
    formData.set("link", link);
    formData.set("image", image);
    axios
      .post(`${address}/youtube`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => alert("successfully created youtube"))
      .catch((err) => alert(err.message));
  };

  const handleimagechange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    // console.log(e.target.files[0])
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={createYoutube}>
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

        <label>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            name="image"
            id=""
            onChange={handleimagechange}
          />
        </label>
        <button type="submit">Create Youtube </button>
      </form>
    </div>
  );
};

export default CreateYoutube;
