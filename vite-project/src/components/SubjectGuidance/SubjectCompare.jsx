import React, { useState } from "react";

const data = {
  Physics: {
    difficulty: "High",
    scope: "Engineering, Research",
    salary: "₹6–12 LPA",
    colleges: "IITs, NITs, DU",
  },
  Economics: {
    difficulty: "Medium",
    scope: "Finance, Analytics",
    salary: "₹5–10 LPA",
    colleges: "SRCC, St. Xavier's, Christ",
  },
  Psychology: {
    difficulty: "Medium",
    scope: "Mental Health, UPSC",
    salary: "₹4–8 LPA",
    colleges: "Delhi University, TISS",
  },
  Accountancy: {
    difficulty: "High",
    scope: "CA, Finance",
    salary: "₹6–15 LPA",
    colleges: "ICAI, NM College",
  },
};

function SubjectCompare() {
  const [sub1, setSub1] = useState("Physics");
  const [sub2, setSub2] = useState("Economics");

  return (
    <div className="compare-box">
      <h3>📊 Compare Subjects</h3>
      <select value={sub1} onChange={(e) => setSub1(e.target.value)}>
        {Object.keys(data).map((s) => <option key={s}>{s}</option>)}
      </select>
      <select value={sub2} onChange={(e) => setSub2(e.target.value)}>
        {Object.keys(data).map((s) => <option key={s}>{s}</option>)}
      </select>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>{sub1}</th>
            <th>{sub2}</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Difficulty</td><td>{data[sub1].difficulty}</td><td>{data[sub2].difficulty}</td></tr>
          <tr><td>Career Scope</td><td>{data[sub1].scope}</td><td>{data[sub2].scope}</td></tr>
          <tr><td>Avg Salary</td><td>{data[sub1].salary}</td><td>{data[sub2].salary}</td></tr>
          <tr><td>Top Colleges</td><td>{data[sub1].colleges}</td><td>{data[sub2].colleges}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default SubjectCompare;
