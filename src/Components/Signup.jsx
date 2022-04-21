import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import address from "../BackendAddress";
import "../Css/signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    axios
      .post(`${address}/user/signup`, { name, email, password })
      .then((data) => {
        navigate("/");
      })
      .catch((err) => alert("Please provide accurate data"));
  };
  return (
    <div className="signup">
      <h1>Sign up</h1>
      <label htmlFor="">
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
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
      <button onClick={signup}>Signup</button>
    </div>
  );
};

export default Signup;
