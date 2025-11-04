import React from "react";
import { Link } from "react-router-dom";
import "./StreamPage.css";
import humanitiesChart from "../../assets/humanities_enrollment_trends.png";

function Humanities() {
  return (
    <div className="stream-page">
      <h2>Humanities Stream</h2>

      <section>
        <h3>🎭 What is Humanities Stream?</h3>
        <p>
          Humanities stream nurtures critical thinking, creativity, and social awareness. It’s perfect for students passionate about history, politics, psychology, and literature.
        </p>
      </section>

      <section>
        <h3>📚 Core Subjects</h3>
        <ul>
          <li>History</li>
          <li>Political Science</li>
          <li>Psychology</li>
          <li>Sociology</li>
          <li>Geography</li>
          <li>Literature</li>
        </ul>
      </section>

      <section>
        <h3>🎓 Explore Colleges</h3>
        <p>
          Use the <Link to="/colleges">College Finder</Link> to explore top humanities programs across India.
        </p>
      </section>

      <section>
        <h3>🧪 Career Paths</h3>
        <ul>
          <li>UPSC & Civil Services</li>
          <li>Law & Legal Studies</li>
          <li>Journalism & Media</li>
          <li>Teaching & Academia</li>
          <li>Social Work & NGOs</li>
        </ul>
      </section>

      <section>
        <h3>📈 Enrollment Trends</h3>
        <img src={humanitiesChart} alt="Humanities Enrollment Chart" className="chart-img" />
        <div className="tip-box">
          💡 Tip: Political Science and Psychology are rising in popularity for UPSC and mental health careers.
        </div>
      </section>
    </div>
  );
}

export default Humanities;
