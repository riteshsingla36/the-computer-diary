import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => navigate("/admin/createquiz")}>CreateQuiz</h1>
      <h1 onClick={() => navigate("/admin/createquestion")}>CreateQuestion</h1>
      <h1 onClick={() => navigate("/admin/createyoutube")}>CreateYoutube</h1>
    </div>
  );
};

export default AdminHome;
