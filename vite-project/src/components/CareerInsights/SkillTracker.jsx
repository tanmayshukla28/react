import React from "react";
import "./CareerInsights.css";

function SkillTracker() {
  const skills = {
    Physics: ["🔢 Math", "🧪 Simulation", "🐍 Python"],
    Economics: ["📊 Excel", "📈 Data Analysis", "📉 R"],
    Psychology: ["🧠 Empathy", "📚 Research", "📊 SPSS"],
  };

  return (
    <div className="section-box">
      <h3>🧠 Skill Tracker</h3>
      {Object.entries(skills).map(([subject, list]) => (
        <div key={subject}>
          <h4>{subject}</h4>
          <div className="badge-row">
            {list.map((skill, idx) => (
              <span key={idx} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillTracker;
``