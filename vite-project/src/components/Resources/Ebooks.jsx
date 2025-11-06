import React, { useState } from "react";
import "./Resources.css";

function Ebooks() {
  const [stream, setStream] = useState("All");

  const books = [
    { title: "📘 NCERT Physics Class 12", stream: "Science", format: "PDF", link: "https://ncert.nic.in/textbook.php?keph1=0-12" },
    { title: "📗 UPSC Polity Guide", stream: "Humanities", format: "PDF", link: "https://www.visionias.in/resources" },
    { title: "📕 Commerce Basics", stream: "Commerce", format: "PDF", link: "https://www.icai.org/post.html?post_id=18062" },
    { title: "📘 NEET Biology", stream: "Science", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/neet-biology" },
    { title: "📗 History Class 12", stream: "Humanities", format: "PDF", link: "https://ncert.nic.in/textbook.php?lehs1=0-12" },
    { title: "📕 Business Studies", stream: "Commerce", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/economics-basics" },
    { title: "📘 CUET Prep Guide", stream: "All", format: "PDF", link: "https://cuet.samarth.ac.in" },
    { title: "📗 Psychology Basics", stream: "Humanities", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/psychology-intro" },
    { title: "📕 Accountancy Class 12", stream: "Commerce", format: "PDF", link: "https://ncert.nic.in/textbook.php?leac1=0-12" },
    { title: "📘 JEE Chemistry Notes", stream: "Science", format: "PDF", link: "https://www.embibe.com/jee/chemistry" },
    { title: "📗 Sociology Guide", stream: "Humanities", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/sociology" },
    { title: "📕 Economics Made Easy", stream: "Commerce", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/economics-basics" },
    { title: "📘 Science Olympiad Book", stream: "Science", format: "PDF", link: "https://www.sofworld.org" },
    { title: "📗 Political Science", stream: "Humanities", format: "PDF", link: "https://ncert.nic.in/textbook.php?leps1=0-12" },
    { title: "📕 Financial Accounting", stream: "Commerce", format: "PDF", link: "https://www.icai.org" },
    { title: "📘 Environmental Science", stream: "Science", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/environmental-science" },
    { title: "📗 Career Planning Handbook", stream: "All", format: "PDF", link: "https://www.ncs.gov.in" },
    { title: "📕 Competitive Exam Prep", stream: "All", format: "PDF", link: "https://www.examrace.com" },
    { title: "📘 Study Skills Toolkit", stream: "All", format: "PDF", link: "https://ndl.iitkgp.ac.in/document/study-skills" },
    { title: "📗 General Knowledge Digest", stream: "All", format: "PDF", link: "https://www.gktoday.in" },
  ];

  const filtered = stream === "All" ? books : books.filter(b => b.stream === stream);

  return (
    <div className="resource-section">
      <h2>📚 E-books Library</h2>
      <p>Download academic PDFs, career guides, and competitive exam books.</p>

      <div className="filter-row">
        <select value={stream} onChange={(e) => setStream(e.target.value)}>
          <option value="All">All Streams</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Humanities">Humanities</option>
        </select>
      </div>

      <div className="resource-grid">
        {filtered.map((book, idx) => (
          <div key={idx} className="resource-card">
            <h4>{book.title}</h4>
            <div className="badge-row">
              <span className="badge">{book.stream}</span>
              <span className="badge">{book.format}</span>
            </div>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Download</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ebooks;
