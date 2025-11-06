import React, { useState } from "react";
import "./Resources.css";

function Scholarships() {
  const [stream, setStream] = useState("All");
  const [income, setIncome] = useState("All");

  const scholarships = [
    // 20+ entries as shown earlier
    {
      name: "🎓 Inspire Scholarship",
      stream: "Science",
      income: "<8L",
      eligibility: "75%+ in Class 12",
      amount: "₹80,000/year",
      deadline: "30 Nov 2025",
      link: "https://online-inspire.gov.in/"
    },
    {
      name: "🎓 UP Scholarship",
      stream: "All",
      income: "<2L",
      eligibility: "UP resident, income < ₹2L",
      amount: "₹12,000/year",
      deadline: "15 Dec 2025",
      link: "https://scholarship.up.gov.in/"
    },
    // ... (add remaining entries here)amount: "₹80,000/year",
    {
      name: "🎓 Tata Trusts Scholarship",
      stream: "All",
      income: "Any",
      eligibility: "Merit-based, all streams",
      amount: "₹50,000–₹2L",
      deadline: "Rolling",
      link: "https://www.tatatrusts.org/our-work/education"
    },
    {
      name: "🎓 PMSSS (J&K)",
      stream: "All",
      income: "<8L",
      eligibility: "J&K students, Class 12 pass",
      amount: "₹1.2L/year",
      deadline: "30 Oct 2025",
      link: "https://www.aicte-india.org"
    },
    {
      name: "🎓 Aditya Birla Scholarship",
      stream: "All",
      income: "Any",
      eligibility: "Top colleges, merit-based",
      amount: "₹1L/year",
      deadline: "15 Nov 2025",
      link: "https://www.adityabirlascholars.net"
    },
    {
      name: "🎓 AICTE Pragati (Girls)",
      stream: "Science",
      income: "<8L",
      eligibility: "Girls in technical education",
      amount: "₹50,000/year",
      deadline: "10 Nov 2025",
      link: "https://www.aicte-india.org/schemes/students-development-schemes"
    },
    {
      name: "🎓 NSP Post-Matric",
      stream: "All",
      income: "<2.5L",
      eligibility: "SC/ST/OBC students",
      amount: "₹12,000–₹30,000",
      deadline: "15 Dec 2025",
      link: "https://scholarships.gov.in"
    },
    {
      name: "🎓 Reliance UG Scholarship",
      stream: "All",
      income: "<3L",
      eligibility: "Top 12th scorers",
      amount: "₹2L total",
      deadline: "15 Nov 2025",
      link: "https://www.reliancefoundation.org"
    },
    {
      name: "🎓 Santoor Women's Scholarship",
      stream: "Humanities",
      income: "<2L",
      eligibility: "Girls from AP, TS, Karnataka",
      amount: "₹24,000/year",
      deadline: "30 Sep 2025",
      link: "https://www.santoorscholarships.com"
    },
    {
      name: "🎓 Vidyasaarathi",
      stream: "All",
      income: "<3L",
      eligibility: "Merit + income based",
      amount: "₹10,000–₹50,000",
      deadline: "Varies",
      link: "https://www.vidyasaarathi.co.in"
    },
    {
      name: "🎓 HDFC Crisis Scholarship",
      stream: "All",
      income: "<3L",
      eligibility: "Emergency financial need",
      amount: "₹10,000–₹75,000",
      deadline: "31 Dec 2025",
      link: "https://www.hdfcbank.com"
    },
    {
      name: "🎓 Loreal Young Women in Science",
      stream: "Science",
      income: "<6L",
      eligibility: "Girls in science, Class 12 pass",
      amount: "₹2.5L/year",
      deadline: "15 Oct 2025",
      link: "https://www.foryoungwomeninscience.com"
    },
    {
      name: "🎓 Maulana Azad Scholarship",
      stream: "Humanities",
      income: "<2L",
      eligibility: "Minority girls, Class 10 pass",
      amount: "₹12,000",
      deadline: "31 Oct 2025",
      link: "https://www.minorityaffairs.gov.in"
    },
    {
      name: "🎓 ONGC Scholarship",
      stream: "Science",
      income: "<2L",
      eligibility: "SC/ST, Engineering/MBBS/MBA",
      amount: "₹48,000/year",
      deadline: "30 Nov 2025",
      link: "https://www.ongcindia.com"
    },
    {
      name: "🎓 Sitaram Jindal Foundation",
      stream: "All",
      income: "<2.5L",
      eligibility: "Merit + income based",
      amount: "₹9,000–₹15,000/year",
      deadline: "Open all year",
      link: "http://www.sitaramjindalfoundation.org"
    },
    {
      name: "🎓 Fair & Lovely Foundation",
      stream: "All",
      income: "<3L",
      eligibility: "Girls, age 15–30",
      amount: "₹25,000–₹1L",
      deadline: "TBA",
      link: "https://www.glowandlovelycareers.in"
    },
    {
      name: "🎓 CLP India Scholarship",
      stream: "All",
      income: "<3L",
      eligibility: "Rural students, Class 10–12",
      amount: "₹6,000–₹18,000",
      deadline: "30 Sep 2025",
      link: "https://www.clpgroup.com"
    },
    {
      name: "🎓 Kotak Shiksha Nidhi",
      stream: "All",
      income: "<3L",
      eligibility: "COVID-affected families",
      amount: "₹20,000–₹1L",
      deadline: "Rolling",
      link: "https://www.kotak.com"
    },
    {
      name: "🎓 Buddy4Study Scholarships",
      stream: "All",
      income: "<3L",
      eligibility: "Multiple schemes",
      amount: "₹10,000–₹2L",
      deadline: "Varies",
      link: "https://www.buddy4study.com"
    },
    {
      name: "🎓 Glow & Lovely Career Foundation",
      stream: "All",
      income: "<3L",
      eligibility: "Girls pursuing graduation",
      amount: "₹25,000",
      deadline: "TBA",
      link: "https://www.glowandlovelycareers.in"
    }
  ];

  const filtered = scholarships.filter((s) => {
    const streamMatch = stream === "All" || s.stream === stream;
    const incomeMatch = income === "All" || s.income === income || s.income === "Any";
    return streamMatch && incomeMatch;
  });

  return (
    <div className="resource-section">
      <h2>🎓 Scholarships</h2>
      <p>Explore government and private scholarships with eligibility, amount, and apply links.</p>

      <div className="filter-row">
        <select value={stream} onChange={(e) => setStream(e.target.value)}>
          <option value="All">All Streams</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Humanities">Humanities</option>
        </select>
        <select value={income} onChange={(e) => setIncome(e.target.value)}>
          <option value="All">All Income Levels</option>
          <option value="<2L">Below ₹2L</option>
          <option value="<2.5L">Below ₹2.5L</option>
          <option value="<3L">Below ₹3L</option>
          <option value="<8L">Below ₹8L</option>
          <option value="Any">No Limit</option>
        </select>
      </div>

      <div className="scholarship-grid">
        {filtered.map((sch, idx) => (
          <div key={idx} className="scholarship-card">
            <h4>{sch.name}</h4>
            <p><strong>Eligibility:</strong> {sch.eligibility}</p>
            <p><strong>Amount:</strong> {sch.amount}</p>
            <p><strong>Deadline:</strong> {sch.deadline}</p>
            <a href={sch.link} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
            </a>
            <div className="badge-row">
              <span className="badge">{sch.stream}</span>
              <span className="badge">Income {sch.income}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scholarships;
