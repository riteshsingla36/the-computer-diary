import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <div>
      {JSON.parse(localStorage.getItem("user")) ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
