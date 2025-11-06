import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    console.log(`${menu} clicked`);
  };

  const handleStreamSelect = (stream) => {
    setOpenDropdown(null);
    navigate(`/subjects/${stream.toLowerCase()}`);
  };

  const handleResourceSelect = (path) => {
    setOpenDropdown(null);
    navigate(`/resources/${path}`);
  };

  useEffect(() => {
    document.body.style.overflow = openDropdown ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDropdown]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="logo">
          <Link to="/">CareerAdvisor</Link>
        </div>

        {/* Middle: Nav buttons */}
        <ul className="nav-links">
          <li>
            <a
              href="#subjects"
              onClick={(e) => {
                e.preventDefault();
                handleClick("subjects");
              }}
            >
              Subjects
            </a>
          </li>
          <li>
            <Link to="/colleges">Colleges</Link>
          </li>
          <li>
            <a
              href="#careers"
              onClick={(e) => {
                e.preventDefault();
                handleClick("careers");
              }}
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#resources"
              onClick={(e) => {
                e.preventDefault();
                handleClick("resources");
              }}
            >
              Resources
            </a>
          </li>
        </ul>

        {/* Right: Dark mode + Auth buttons */}
        <div className="nav-actions">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark-toggle-btn"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {user ? (
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
              className="logout-btn"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="login-btn">Login / Signup</button>
            </Link>
          )}
        </div>
      </nav>

      {/* Overlay */}
      {openDropdown && (
        <div className="overlay" onClick={() => setOpenDropdown(null)}></div>
      )}

      {/* Dropdown Panel */}
      {openDropdown && (
        <div className="dropdown-panel">
          {["subjects", "careers"].includes(openDropdown) ? (
            <>
              <h2>Choose your domain</h2>
              <div className="dropdown-buttons">
                <button onClick={() => handleStreamSelect("Science")}>
                  Science
                </button>
                <button onClick={() => handleStreamSelect("Commerce")}>
                  Commerce
                </button>
                <button onClick={() => handleStreamSelect("Humanities")}>
                  Humanities
                </button>
              </div>
            </>
          ) : openDropdown === "resources" ? (
            <>
              <h2>Resources</h2>
              <div className="dropdown-buttons">
                <button onClick={() => handleResourceSelect("ebooks")}>
                  E-books
                </button>
                <button onClick={() => handleResourceSelect("materials")}>
                  Materials
                </button>
                <button onClick={() => handleResourceSelect("scholarships")}>
                  Scholarships
                </button>
              </div>
            </>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Navbar;
