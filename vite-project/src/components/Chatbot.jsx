import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Temporary bot reply (you can later connect to AI backend)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your question, we'll get back to you!" },
      ]);
    }, 800);
  };

  return (
    <div className="chatbot-container">
      {/* Floating toggle button */}
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chatbox */}
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.from === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
