import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    console.log(`${menu} clicked`);
  };

  // Disable scrolling when dropdown is open
  useEffect(() => {
    if (openDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [openDropdown]);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">CareerAdvisor</div>

        <ul className="nav-links">
          {/* Dark mode toggle button on left */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="dark-toggle-btn"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>

          {/* Rest of navbar items on right */}
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
            <a href="#colleges" onClick={() => console.log("Colleges clicked")}>
              Colleges
            </a>
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
      </nav>

      {/* Overlay Blur */}
      {openDropdown && (
        <div className="overlay" onClick={() => setOpenDropdown(null)}></div>
      )}

      {/* Dropdown Panel */}
      {openDropdown && (
        <div className="dropdown-panel">
          {openDropdown === "subjects" || openDropdown === "careers" ? (
            <>
              <h2>Choose your domain</h2>
              <div className="dropdown-buttons">
                <button onClick={() => console.log("Science clicked")}>
                  Science
                </button>
                <button onClick={() => console.log("Commerce clicked")}>
                  Commerce
                </button>
                <button onClick={() => console.log("Humanities clicked")}>
                  Humanities
                </button>
              </div>
            </>
          ) : openDropdown === "resources" ? (
            <>
              <h2>Resources</h2>
              <div className="dropdown-buttons">
                <button onClick={() => console.log("E-books clicked")}>
                  E-books
                </button>
                <button onClick={() => console.log("Materials clicked")}>
                  Materials
                </button>
                <button onClick={() => console.log("Scholarships clicked")}>
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
