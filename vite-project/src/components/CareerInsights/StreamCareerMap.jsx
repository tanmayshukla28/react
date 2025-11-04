import React from "react";
import "./CareerInsights.css";

function StreamCareerMap() {
  const careers = {
    Science: [
      { icon: "🧪", title: "Engineer", salary: "₹8–12 LPA", recruiters: "Google, ISRO" },
      { icon: "🩺", title: "Doctor", salary: "₹6–15 LPA", recruiters: "AIIMS, Apollo" },
    ],
    Commerce: [
      { icon: "📊", title: "CA", salary: "₹7–14 LPA", recruiters: "Deloitte, EY" },
      { icon: "💼", title: "Entrepreneur", salary: "Varies", recruiters: "Self-driven" },
    ],
    Humanities: [
      { icon: "⚖️", title: "Lawyer", salary: "₹6–12 LPA", recruiters: "High Courts" },
      { icon: "📰", title: "Journalist", salary: "₹4–8 LPA", recruiters: "TOI, NDTV" },
    ],
  };

  return (
    <div className="section-box">
      <h3>🎯 Stream to Career Mapping</h3>
      {Object.entries(careers).map(([stream, roles]) => (
        <div key={stream}>
          <h4>{stream}</h4>
          <ul>
            {roles.map((role, idx) => (
              <li key={idx}>
                <strong>{role.icon} {role.title}</strong> — {role.salary} <br />
                <span style={{ color: "#555" }}>Top recruiters: {role.recruiters}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StreamCareerMap;
