import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import LoginSignup from "./components/LoginSignup";
import AcademicForm from "./components/AcademicForm";
import AboutDeveloper from "./components/AboutDeveloper";

import "./App.css";

function LogoOnly() {
  return (
    <div style={{ padding: "1rem", fontWeight: "bold", fontSize: "1.5rem" }}>
      CareerAdvisor
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      fetch(`http://localhost:5000/api/form/user?email=${email}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("❌ Failed to fetch user:", err));
    }
  }, []);

  let TopBar = null;
  if (location.pathname !== "/login" && location.pathname !== "/form") {
    TopBar = <Navbar user={user} />;
  } else if (location.pathname === "/form") {
    TopBar = <LogoOnly />;
  }

  return (
    <div className="app">
      {TopBar}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero user={user} />
              <Features />
              <Chatbot />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/form" element={<AcademicForm />} />
        <Route path="/about" element={<AboutDeveloper />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
