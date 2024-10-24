// pages/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const from = location.state?.from || "/host";

  function handleSubmit(e) {
    e.preventDefault();
    if (
      loginFormData.username === "user" &&
      loginFormData.password === "password"
    ) {
      login();
      navigate(from, { replace: true });
    } else {
      setError("Invalid credentials");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      {error && <h3 className="login-error">{error}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="Username"
          value={loginFormData.username}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
