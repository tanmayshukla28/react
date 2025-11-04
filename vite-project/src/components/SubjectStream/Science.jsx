import React from "react";
import { Link } from "react-router-dom";
import "./StreamPage.css";
import scienceChart from "../../assets/science_enrollment_trends.png";

function Science() {
  return (
    <div className="stream-page">
      <h2>Science Stream</h2>

      <section>
        <h3>🔬 What is Science Stream?</h3>
        <p>
          Science stream opens doors to innovation, research, and technology. It’s ideal for students
          interested in exploring the natural world, solving real-world problems, and building future-ready careers.
        </p>
      </section>

      <section>
        <h3>📚 Core Subjects</h3>
        <ul>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>Biology</li>
          <li>Mathematics</li>
          <li>Computer Science</li>
        </ul>
      </section>

      <section>
        <h3>🎓 Explore Colleges</h3>
        <p>
          Use the <Link to="/colleges">College Finder</Link> to discover top institutions offering science programs across India.
        </p>
      </section>

      <section>
        <h3>🧪 Career Paths</h3>
        <ul>
          <li>Engineering (IIT, NIT, etc.)</li>
          <li>Medical (MBBS, BDS, etc.)</li>
          <li>Research & Academia</li>
          <li>Data Science & AI</li>
          <li>Pharmaceuticals</li>
        </ul>
      </section>

      <section>
        <h3>📈 Enrollment Trends</h3>
        <img src={scienceChart} alt="Science Enrollment Chart" className="chart-img" />
        <div className="tip-box">
          💡 Tip: Physics and Math have the highest enrollment — great for tech and engineering careers.
        </div>
      </section>
    </div>
  );
}

export default Science;
