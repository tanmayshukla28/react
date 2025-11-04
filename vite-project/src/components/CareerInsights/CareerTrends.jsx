import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function CareerTrends() {
  const [metric, setMetric] = useState("demand");

  const datasets = {
    demand: [85, 75, 65, 60, 50],
    salary: [12, 10, 8, 7, 6],
    growth: [20, 18, 15, 12, 10],
  };

  const data = {
    labels: ["Engineering", "Finance", "UPSC", "Law", "Media"],
    datasets: [
      {
        label: metric === "salary" ? "Avg Salary (LPA)" : metric === "growth" ? "Growth Rate (%)" : "Job Demand Index",
        data: datasets[metric],
        backgroundColor: ["#3498db", "#f39c12", "#2ecc71", "#9b59b6", "#e74c3c"],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="section-box" style={{ height: "320px" }}>
      <h3>📈 Career Trends</h3>
      <select onChange={(e) => setMetric(e.target.value)} value={metric}>
        <option value="demand">Job Demand</option>
        <option value="salary">Avg Salary</option>
        <option value="growth">Growth Rate</option>
      </select>
      <Bar data={data} options={options} />
    </div>
  );
}

export default CareerTrends;
