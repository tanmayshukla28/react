const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const formRoutes = require('./routes/formRoutes');
const chatRoutes = require('./routes/chatRoutes');
const collegeRoutes = require("./routes/collegeRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/colleges", collegeRoutes);
app.use('/api/form', formRoutes);
app.use('/api/chat', chatRoutes); // ✅ Chat route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
