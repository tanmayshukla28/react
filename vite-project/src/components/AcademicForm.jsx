import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AcademicForm.css";

const AcademicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    stream: "",
    goals: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/form", formData);

      if (res.data.message === "User exists, password required") {
        alert("Welcome back! Redirecting to login...");
        navigate("/login");
      } else {
        alert("Form submitted! Now set your password.");
        navigate("/login");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <h2>Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit} className="academic-form">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
          <option value="college">College</option>
        </select>
        <input
          type="text"
          name="stream"
          placeholder="Stream (Science, Commerce...)"
          value={formData.stream}
          onChange={handleChange}
          required
        />
        <textarea
          name="goals"
          placeholder="Career Goals"
          value={formData.goals}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AcademicForm;
