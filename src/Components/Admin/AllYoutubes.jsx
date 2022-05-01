import axios from "axios";
import React, { useEffect, useState } from "react";
import address from "../../BackendAddress";

const AllYoutubes = () => {
  const [youtubes, setYoutubes] = useState([]);
  const [up, setUp] = useState(false);

  useEffect(() => {
    axios
      .get(`${address}/youtube`)
      .then((data) => setYoutubes(data.data))
      .catch(() => alert("Error Occured"));
  }, [up]);

  const deleteYoutube = (id) => {
    axios
      .delete(`${address}/youtube/${id}`)
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch(() => alert("Error Occured"));
    setUp(!up);
  };

  return (
    <div>
      <h2>All Youtubes</h2>
      <table border="1" style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Link</th>
            <th>Hours</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {youtubes.map((youtube) => {
            return (
              <tr>
                <td>{youtube.image}</td>
                <td>{youtube.name}</td>
                <td>{youtube.link}</td>
                <td>{youtube.hours}</td>
                <td>
                  <button onClick={() => deleteYoutube(youtube._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllYoutubes;
