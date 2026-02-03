const mongoose = require("mongoose");

const demoRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    businessType: { type: String },
    message: { type: String },
    demoType: {
      type: String,
      default: "CRM / Software Demo",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DemoRequest", demoRequestSchema);
