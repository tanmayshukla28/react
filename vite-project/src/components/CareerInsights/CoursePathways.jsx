import React from "react";
import "./CareerInsights.css";

function CoursePathways() {
  const pathways = {
    Science: ["🔬 BSc → MSc → Research", "🧪 BTech → MTech → Engineering"],
    Commerce: ["📘 BCom → MCom → Finance", "📊 BBA → MBA → Analytics"],
    Humanities: ["📚 BA → MA → UPSC", "⚖️ BA LLB → LLM → Law"],
  };

  return (
    <div className="section-box">
      <h3>🧭 Career Roadmap</h3>
      {Object.entries(pathways).map(([stream, flow]) => (
        <div key={stream}>
          <h4>{stream}</h4>
          <ul>
            {flow.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CoursePathways;
