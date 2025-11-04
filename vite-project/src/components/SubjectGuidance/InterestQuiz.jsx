import React, { useState } from "react";

function InterestQuiz() {
  const [result, setResult] = useState(null);

  const questions = [
    { q: "I enjoy solving logical problems", tag: "science" },
    { q: "I’m interested in business and money", tag: "commerce" },
    { q: "I love reading about history and people", tag: "humanities" },
    { q: "I’m curious about nature and experiments", tag: "science" },
    { q: "I like understanding how society works", tag: "humanities" },
    { q: "I enjoy analyzing data and trends", tag: "commerce" },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(false));

  const handleChange = (index) => {
    const updated = [...answers];
    updated[index] = !updated[index];
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const scores = { science: 0, commerce: 0, humanities: 0 };
    answers.forEach((ans, i) => {
      if (ans) scores[questions[i].tag]++;
    });

    const stream = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
    const suggestions = {
      science: {
        subjects: ["Physics", "Math", "Computer Science"],
        careers: ["Engineer", "Doctor", "Data Scientist"],
      },
      commerce: {
        subjects: ["Accountancy", "Economics", "Business Studies"],
        careers: ["CA", "Banker", "Entrepreneur"],
      },
      humanities: {
        subjects: ["History", "Political Science", "Psychology"],
        careers: ["UPSC", "Lawyer", "Journalist"],
      },
    };

    setResult({ stream, ...suggestions[stream] });
  };

  return (
    <div className="quiz-box">
      <h3>🧠 What are you curious about?</h3>
      {questions.map((item, i) => (
        <label key={i}>
          <input type="checkbox" checked={answers[i]} onChange={() => handleChange(i)} />
          {item.q}
        </label>
      ))}
      <button onClick={handleSubmit}>Get Recommendation</button>

      {result && (
        <div className="result-box">
          <h4>Recommended Stream: {result.stream}</h4>
          <p><strong>Top Subjects:</strong> {result.subjects.join(", ")}</p>
          <p><strong>Career Paths:</strong> {result.careers.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default InterestQuiz;
