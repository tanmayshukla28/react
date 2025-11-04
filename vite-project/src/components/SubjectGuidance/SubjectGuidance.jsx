import React from "react";
import InterestQuiz from "./InterestQuiz";
import SubjectCompare from "./SubjectCompare";
import StreamTrends from "./StreamTrends";
import "./SubjectGuidance.css";

function SubjectGuidance() {
  return (
    <div className="guidance-page">
      <h2>📘 Subject Guidance</h2>
      <p>Get personalized recommendations, compare subjects, and explore stream trends to make informed choices.</p>

      <InterestQuiz />
      <SubjectCompare />
      <StreamTrends />
    </div>
  );
}

export default SubjectGuidance;
