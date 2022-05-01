import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/admin/allquizzes")}>All Quizzes</button>
      <button onClick={() => navigate("/admin/allyoutubes")}>
        All Youtubes
      </button>
      <h1 onClick={() => navigate("/admin/createquiz")}>CreateQuiz</h1>

      <h1 onClick={() => navigate("/admin/createyoutube")}>CreateYoutube</h1>
    </div>
  );
};

export default AdminHome;
