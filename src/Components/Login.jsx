import axios from "axios";
import address from "../BackendAddress";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/login.css";

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
    <div className="login">
      <h1>Login</h1>
      <label htmlFor="">
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="">
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={login}>Login</button>
      <br />
      <label htmlFor="" className="label-signup">
        Not already a user{" "}
        <span onClick={() => navigate("/signup")}> Signup Here</span>
      </label>
    </div>
  );
};

export default Login;
