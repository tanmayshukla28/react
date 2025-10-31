import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { from: "user", text: userMessage }]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: userMessage,
      });
      const botReply = res.data.reply;
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, I couldn't respond right now." },
      ]);
    }
  };

  useEffect(() => {
    const box = document.querySelector(".chatbot-messages");
    if (box) box.scrollTop = box.scrollHeight;
  }, [messages]);

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

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
