const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const demoRoutes = require("./routes/demoRoutes");



const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/request-demo", demoRoutes);
app.use("/api/admin", require("./routes/adminRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Graviton Backend is running");
});

module.exports = app;
