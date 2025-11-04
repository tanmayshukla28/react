import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

function StreamTrends() {
  const enrollmentData = {
    labels: ["Science", "Commerce", "Humanities"],
    datasets: [
      {
        label: "Enrollment (in lakhs)",
        data: [53.5, 42, 39],
        backgroundColor: ["#3498db", "#f39c12", "#e74c3c"],
        borderRadius: 6,
      },
    ],
  };

  const careerData = {
    labels: ["Science", "Commerce", "Humanities"],
    datasets: [
      {
        label: "Career Distribution (%)",
        data: [40, 35, 25],
        backgroundColor: ["#1abc9c", "#9b59b6", "#e67e22"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  return (
    <div className="trends-box">
      <h3>📈 Stream Popularity & Career Trends</h3>

      <section style={{ height: "260px", marginBottom: "2rem" }}>
        <h4>Enrollment Trends</h4>
        <Bar data={enrollmentData} options={chartOptions} />
      </section>

      <section style={{ height: "260px" }}>
        <h4>Career Distribution</h4>
        <Pie data={careerData} options={{ ...chartOptions, plugins: { legend: { position: "bottom" } } }} />
      </section>
    </div>
  );
}

export default StreamTrends;
