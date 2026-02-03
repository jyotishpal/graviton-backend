const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  login,
  getContacts,
  getDemos,
} = require("../controllers/adminController");

router.post("/login", login);

// 🔐 PROTECTED
router.get("/contacts", auth, getContacts);
router.get("/demos", auth, getDemos);

module.exports = router;
