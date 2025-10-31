import React from "react";
import "./AboutDeveloper.css"; // optional for styling

function AboutDeveloper() {
  return (
    <div className="about-developer" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>About the Developer</h1>
      <p>
        Hi, I’m <strong>Tanmay Shukla</strong>, a college student passionate about web
        development and career guidance tools. I built this project alone to help
        students choose the right career path and resources.
      </p>
      <p>
        Connect with me on:
        <br />
        <a
          href="https://www.linkedin.com/in/tanmayshukla2802"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0077b5", fontWeight: "bold" }}
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default AboutDeveloper;
