const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Contact = require("../models/Contact");
const DemoRequest = require("../models/DemoRequest");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { adminId: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};

exports.getContacts = async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json(data);
};

exports.getDemos = async (req, res) => {
  const data = await DemoRequest.find().sort({ createdAt: -1 });
  res.json(data);
};
