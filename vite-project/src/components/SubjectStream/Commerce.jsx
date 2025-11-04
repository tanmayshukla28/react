import React from "react";
import { Link } from "react-router-dom";
import "./StreamPage.css";
import commerceChart from "../../assets/commerce_enrollment_trends.png";

function Commerce() {
  return (
    <div className="stream-page">
      <h2>Commerce Stream</h2>

      <section>
        <h3>💼 What is Commerce Stream?</h3>
        <p>
          Commerce stream is ideal for students interested in business, finance, and economics. It builds a strong foundation for careers in corporate, banking, and entrepreneurship.
        </p>
      </section>

      <section>
        <h3>📚 Core Subjects</h3>
        <ul>
          <li>Accountancy</li>
          <li>Business Studies</li>
          <li>Economics</li>
          <li>Mathematics</li>
          <li>Entrepreneurship</li>
        </ul>
      </section>

      <section>
        <h3>🎓 Explore Colleges</h3>
        <p>
          Use the <Link to="/colleges">College Finder</Link> to explore top commerce colleges across India.
        </p>
      </section>

      <section>
        <h3>🧪 Career Paths</h3>
        <ul>
          <li>Chartered Accountant (CA)</li>
          <li>Company Secretary (CS)</li>
          <li>Finance & Banking</li>
          <li>MBA & Business Analytics</li>
          <li>Entrepreneurship</li>
        </ul>
      </section>

      <section>
        <h3>📈 Enrollment Trends</h3>
        <img src={commerceChart} alt="Commerce Enrollment Chart" className="chart-img" />
        <div className="tip-box">
          💡 Tip: Economics and Accountancy are top picks for students aiming for finance and analytics careers.
        </div>
      </section>
    </div>
  );
}

export default Commerce;
