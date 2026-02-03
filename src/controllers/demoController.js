const DemoRequest = require("../models/DemoRequest");

exports.createDemoRequest = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email and phone are required",
      });
    }

    const demoRequest = await DemoRequest.create(req.body);

    res.status(201).json({
      message: "Demo request submitted successfully",
      data: demoRequest,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
