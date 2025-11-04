import React from "react";
import RecommendedCareers from "./RecommendedCareers";
import StreamCareerMap from "./StreamCareerMap";
import CoursePathways from "./CoursePathways";
import EntranceExamGuide from "./EntranceExamGuide";
import CareerTrends from "./CareerTrends";
import SkillTracker from "./SkillTracker";
import "./CareerInsights.css";

function CareerInsights() {
  return (
    <div className="career-page">
      <h2>💼 Career Insights</h2>
      <p>Explore career paths, courses, exams, skills, and trends based on your stream and interests.</p>

      <RecommendedCareers />
      <StreamCareerMap />
      <CoursePathways />
      <EntranceExamGuide />
      <CareerTrends />
      <SkillTracker />
    </div>
  );
}

export default CareerInsights;
