const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Form = require('../models/formModel');

// ✅ Academic form submission
router.post('/', async (req, res) => {
  const { name, email, class: userClass, stream, goals } = req.body;

  try {
    const existingUser = await Form.findOne({ email });

    if (existingUser) {
      const isSameData =
        existingUser.name === name &&
        existingUser.class === userClass &&
        existingUser.stream === stream &&
        existingUser.goals === goals;

      if (isSameData) {
        return res.status(200).json({ message: "User exists, password required" });
      } else {
        return res.status(400).json({ error: "Email already used with different data" });
      }
    }

    const newUser = new Form({ name, email, class: userClass, stream, goals });
    await newUser.save();
    console.log("📄 Academic form saved:", newUser);
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("❌ Form save error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Smart login: create or verify user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log("📥 Login attempt:", { email, password });

  try {
    let user = await Form.findOne({ email });

    if (!user) {
      // ✅ New user → create with password
      user = new Form({ email, password });
      await user.save();
      console.log("🆕 New user created:", user);
      return res.status(201).json({ message: "New user created. Please complete your profile." });
    }

    if (!user.password) {
      // ✅ Existing user without password → set it now
      user.password = password;
      await user.save();
      console.log("🔐 Password set for existing user:", user);
      return res.status(200).json({ message: "Password set successfully. Welcome!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Incorrect password for:", email);
      return res.status(401).json({ error: "Incorrect password" });
    }

    console.log("✅ Existing user logged in:", user);
    return res.status(200).json({ message: "Welcome back!" });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Fetch user by email for homepage personalization
router.get('/user', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await Form.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("❌ User fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

module.exports = router;
