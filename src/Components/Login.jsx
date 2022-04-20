import axios from "axios";
import address from "../BackendAddress";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    axios
      .post(`${address}/user/login`, { email, password })
      .then((data) => {
        if (data.data.user !== null) {
          localStorage.setItem("token", JSON.stringify(data.data.token));
          localStorage.setItem("user", JSON.stringify(data.data.user));
          console.log(data.data);
          if (data.data.user.role === "user") {
            navigate("/");
          }
          if (data.data.user.role === "admin") {
            navigate("/admin/home");
          }
        } else {
          alert("Email or password is wron");
        }
      })
      .catch((err) => alert("Email or password is wrong"));
  };
  return (
    <div>
      <label htmlFor="">
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button onClick={login}>Login</button>

      <label htmlFor="" onClick={() => navigate("/signup")}>
        Not already a user Signup Here
      </label>
    </div>
  );
};

export default Login;
