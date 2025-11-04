import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CollegeFinder.css";

function CollegeFinder() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    admission: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/colleges")
      .then((res) => {
        console.log("✅ Fetched colleges:", res.data.length);
        setColleges(res.data);
      })
      .catch((err) => console.error("❌ College fetch error:", err));
  }, []);

  const filteredColleges = colleges.filter((college) => {
    return (
      college.Name?.toLowerCase().includes(search.toLowerCase()) &&
      (filters.location ? college.State === filters.location : true) &&
      (filters.type ? college.Management === filters.type : true) &&
      (filters.admission ? college.CollegeType === filters.admission : true)
    );
  });

  return (
    <div className="college-finder">
      <h2>Explore Colleges</h2>

      <input
        type="text"
        placeholder="Search college name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        <select onChange={(e) => setFilters({ ...filters, location: e.target.value })}>
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="">All Types</option>
          <option value="State Government">State Government</option>
          <option value="Private Un-Aided">Private Un-Aided</option>
        </select>

        <select onChange={(e) => setFilters({ ...filters, admission: e.target.value })}>
          <option value="">All Admission Modes</option>
          <option value="Affiliated College">Affiliated College</option>
          <option value="Constituent College">Constituent College</option>
        </select>
      </div>

      <div className="college-list">
        {filteredColleges.map((college, index) => (
          <div key={index} className="college-card">
            <h3>{college.Name}</h3>
            <p><strong>State:</strong> {college.State}</p>
            <p><strong>District:</strong> {college.District}</p>
            <p><strong>Type:</strong> {college.CollegeType}</p>
            <p><strong>Management:</strong> {college.Management}</p>
            <p><strong>Location:</strong> {college.Location}</p>
            <p><strong>Established:</strong> {college.YearOfEstablishment}</p>
            <p><strong>Website:</strong> <a href={college.Website} target="_blank" rel="noreferrer">{college.Website}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollegeFinder;
