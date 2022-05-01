import axios from "axios";
import React, { useEffect, useState } from "react";
import address from "../../BackendAddress";
import { useNavigate } from "react-router-dom";

const AllQuizzes = () => {
  const [quiz, setQuizzes] = useState([]);
  const [up, setUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${address}/quiz`)
      .then((data) => setQuizzes(data.data))
      .catch(() => alert("Error Occured"));
  }, [up]);

  const deleteQuiz = (id) => {
    axios
      .delete(`${address}/quiz/${id}`)
      .then(() => alert("Deleted Successfully"))
      .catch(() => alert("Error Occured"));

    setUp(!up);
  };

  return (
    <div>
      <h2>All Quizzes</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Hours</th>
            <th>Add questions</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {quiz.map((quiz) => {
            return (
              <tr>
                <td>
                  <img src={`http://localhost:8000/{quiz.image}`} alt="" />
                </td>
                <td>{quiz.name}</td>
                <td>{quiz.description}</td>
                <td>{quiz.hours}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/admin/createquestion/${quiz._id}`)
                    }
                  >
                    Add Question
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteQuiz(quiz._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllQuizzes;
