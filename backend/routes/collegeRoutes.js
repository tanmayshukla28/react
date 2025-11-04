const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("./data/colleges.json", "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading colleges.json:", err);
      return res.status(500).json({ error: "Failed to load college data" });
    }
    try {
      const colleges = JSON.parse(data);
      res.json(colleges); // ✅ Already limited to 2000
    } catch (parseErr) {
      console.error("❌ JSON parse error:", parseErr);
      res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

module.exports = router;
