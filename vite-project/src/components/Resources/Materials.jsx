import React, { useState } from "react";
import "./Resources.css";

function Materials() {
  const [tab, setTab] = useState("Academic");

  const content = {
    Academic: [
      { name: "🧮 Math Worksheets", link: "https://www.studiestoday.com" },
      { name: "📘 Physics Numericals", link: "https://www.embibe.com/physics" },
      { name: "📗 Chemistry Practice", link: "https://www.learncbse.in" },
      { name: "📕 Biology Diagrams", link: "https://ncert.nic.in" },
      { name: "📊 Economics Graphs", link: "https://ncert.nic.in" },
      { name: "📈 Statistics Sets", link: "https://www.toppr.com" },
      { name: "📚 History Timelines", link: "https://ncert.nic.in" },
      { name: "📜 Civics Notes", link: "https://ncert.nic.in" },
      { name: "🧠 Reasoning Sets", link: "https://www.indiabix.com" },
      { name: "📝 Sample Papers", link: "https://cbseacademic.nic.in" },
    ],
    Skill: [
      { name: "🧠 Python Templates", link: "https://github.com/topics/python-template" },
      { name: "📊 Excel Exercises", link: "https://excel-practice-online.com" },
      { name: "🌐 HTML Starter Pack", link: "https://www.w3schools.com/html/" },
      { name: "🎨 Canva Design Kit", link: "https://www.canva.com/templates/" },
      { name: "⌨️ Typing Practice", link: "https://www.typingclub.com/" },
      { name: "🧮 JavaScript Snippets", link: "https://jsfiddle.net" },
      { name: "🎯 CSS Tricks", link: "https://css-tricks.com" },
      { name: "📱 App UI Kits", link: "https://uikitbase.com" },
      { name: "🧪 GitHub Projects", link: "https://github.com/explore" },
      { name: "📦 Figma UI Kits", link: "https://www.figma.com/community" },
    ],
    Career: [
      { name: "💼 Resume Templates", link: "https://www.canva.com/resumes/" },
      { name: "🗣️ Interview Qs", link: "https://www.geeksforgeeks.org/hr-interview-questions/" },
      { name: "📄 Cover Letter Samples", link: "https://zety.com/cover-letter-examples" },
      { name: "🔗 LinkedIn Optimization", link: "https://www.linkedin.com/help/linkedin" },
      { name: "🧭 Career Planning Kit", link: "https://www.ncs.gov.in" },
      { name: "🧠 Soft Skills Guide", link: "https://www.skillsyouneed.com" },
      { name: "🎯 Goal Setting Templates", link: "https://www.smartsheet.com" },
      { name: "📈 Career Roadmaps", link: "https://www.careerguide.com" },
      { name: "🧳 Internship Portals", link: "https://internshala.com" },
      { name: "📘 Time Management Sheets", link: "https://www.vertex42.com" },
    ],
  };

  return (
    <div className="resource-section">
      <h2>🛠️ Practice Materials</h2>
      <p>Sharpen your skills with curated worksheets, templates, and career kits.</p>

      <div className="tab-row">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            className={`tab-btn ${tab === key ? "active" : ""}`}
            onClick={() => setTab(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="resource-grid">
        {content[tab].map((item, idx) => (
          <div key={idx} className="resource-card">
            <h4>{item.name}</h4>
            <div className="badge-row">
              <span className="badge">{tab}</span>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Open</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Materials;
