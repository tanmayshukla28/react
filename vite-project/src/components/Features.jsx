import React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      title: "Subject Guidance",
      desc: "Choose the best subject combinations after Class 12 based on your interests and goals.",
      link: "#subjects"
    },
    {
      title: "College Finder",
      desc: "Explore and compare government colleges near you with course details, fees, and admissions info.",
      link: "#colleges"
    },
    {
      title: "Career Insights",
      desc: "Understand long-term outcomes – courses, jobs, skills, and entrance exams required.",
      link: "#careers"
    },
    {
      title: "Free Resources",
      desc: "Get open-source e-books, skill-building materials, and scholarships to support your journey.",
      link: "#resources"
    },
  ];

  const handleClick = (title) => {
    console.log(`Feature clicked: ${title}`);
  };

  return (
    <section className="features">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-card">
          <a
            href={feature.link}
            className="feature-btn"
            onClick={() => handleClick(feature.title)}
          >
            {feature.title}
          </a>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
