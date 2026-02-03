const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const demoRoutes = require("./routes/demoRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express(); // ✅ FIRST create app

// ✅ CORS (production + local)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://graviton-frontend.vercel.app"
    ],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/request-demo", demoRoutes);
app.use("/api/admin", adminRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Graviton Backend is running");
});

module.exports = app;
