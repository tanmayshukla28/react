const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'You are a helpful career advisor chatbot.' },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 512
      },
      {
        headers: {
          Authorization: 'Bearer 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',
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data?.choices?.[0]?.message?.content || "Sorry, I couldn't generate a reply.";
    console.log("✅ AI Reply:", reply);
    res.json({ reply });
  } catch (err) {
    console.error("❌ Groq API error:", err.response?.status, err.response?.data?.error?.message || err.message);
    res.status(500).json({ reply: "AI service failed. Try again later." });
  }
});

module.exports = router;
