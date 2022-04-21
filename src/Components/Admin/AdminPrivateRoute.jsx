import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoute = () => {
  return (
    <div>
      {JSON.parse(localStorage.getItem("user")).role === "admin" ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default AdminPrivateRoute;
