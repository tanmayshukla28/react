import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

function Features() {
  const features = [
    {
      title: "Subject Guidance",
      desc: "Take a quiz, compare subjects, and explore stream trends to find your ideal academic path.",
      route: "/subject-guidance"
    },
    {
      title: "College Finder",
      desc: "Explore and compare government colleges near you with course details, fees, and admissions info.",
      route: "/colleges"
    },
    {
      title: "Career Insights",
      desc: "Understand long-term outcomes – courses, jobs, skills, and entrance exams required.",
      route: "/career-insights" // ✅ Fixed route
    },
    {
      title: "Free Resources",
      desc: "Get open-source e-books, skill-building materials, and scholarships to support your journey.",
      route: "/resources" // ✅ Optional: create this route later
    },
  ];

  const handleClick = (title) => {
    console.log(`Feature clicked: ${title}`);
  };

  return (
    <section className="features">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-card">
          <Link
            to={feature.route}
            className="feature-btn"
            onClick={() => handleClick(feature.title)}
          >
            {feature.title}
          </Link>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
