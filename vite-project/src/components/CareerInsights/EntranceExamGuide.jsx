import React from "react";
import "./CareerInsights.css";

function EntranceExamGuide() {
  const exams = {
    Science: ["🧪 JEE", "🩺 NEET", "📘 CUET"],
    Commerce: ["📊 CA Foundation", "📘 CUET", "💼 IPMAT"],
    Humanities: ["⚖️ CLAT", "📘 CUET", "🧠 UPSC"],
  };

  return (
    <div className="section-box">
      <h3>📝 Entrance Exam Guide</h3>
      {Object.entries(exams).map(([stream, list]) => (
        <div key={stream}>
          <h4>{stream}</h4>
          <ul>
            {list.map((exam, idx) => (
              <li key={idx}>{exam}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default EntranceExamGuide;
