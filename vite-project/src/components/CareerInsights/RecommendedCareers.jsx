import React from "react";
import "./CareerInsights.css";

function RecommendedCareers() {
  const recommended = [
    { icon: "🧠", title: "Data Scientist", reason: "High demand + strong math skills" },
    { icon: "⚖️", title: "Lawyer", reason: "Good communication + interest in justice" },
    { icon: "📊", title: "Investment Banker", reason: "Strong analytical + commerce background" },
  ];

  return (
    <div className="section-box">
      <h3>✨ Recommended for You</h3>
      <div className="card-grid">
        {recommended.map((item, idx) => (
          <div key={idx} className="career-card">
            <h4>{item.icon} {item.title}</h4>
            <p>{item.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedCareers;
