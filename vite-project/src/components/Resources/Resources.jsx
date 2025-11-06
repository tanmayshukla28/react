import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";

function Resources() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "📚 E-books",
      desc: "Download academic PDFs, career guides, and competitive exam books.",
      route: "/resources/ebooks",
      color: "#3498db",
    },
    {
      title: "🛠️ Materials",
      desc: "Practice worksheets, coding templates, resume kits, and interview prep.",
      route: "/resources/materials",
      color: "#2ecc71",
    },
    {
      title: "🎓 Scholarships",
      desc: "Explore government and private scholarships with eligibility and apply links.",
      route: "/resources/scholarships",
      color: "#e67e22",
    },
  ];

  return (
    <div className="resource-section">
      <h2>📦 Resources Hub</h2>
      <p>Everything you need to level up your academic and career journey — curated and free.</p>

      <div className="resource-grid">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className="resource-card"
            style={{ borderTop: `6px solid ${sec.color}` }}
            onClick={() => navigate(sec.route)}
          >
            <h3>{sec.title}</h3>
            <p>{sec.desc}</p>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
