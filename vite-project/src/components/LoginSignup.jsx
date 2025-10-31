import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/form/login", {
        email,
        password,
      });

      const msg = res.data.message;

      // ✅ Save login info
      localStorage.setItem("userEmail", email);
      localStorage.setItem("isLoggedIn", "true");

      // ✅ Show message and reload homepage
      if (msg === "Welcome back!") {
        alert("🎉 Welcome back!");
        window.location.href = "/";
      } else if (msg === "Password set successfully. Welcome!") {
        alert("✅ Password set! Welcome!");
        window.location.href = "/";
      } else if (msg === "New user created. Please complete your profile.") {
        alert("🆕 New user created! Please fill your academic details.");
        window.location.href = "/form";
      }
    } catch (err) {
      const status = err.response?.status;
      if (status === 401) {
        alert("Incorrect password.");
      } else {
        alert("Something went wrong.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <div className="logo">
          <Link to="/">CareerAdvisor</Link>
        </div>
        <div>
          <Link to="/">
            <button className="home-btn">🏠 Home</button>
          </Link>
        </div>
      </div>

      <div className="login-box">
        <h2>Login / Signup</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/form">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
