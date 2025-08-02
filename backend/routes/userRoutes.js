const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { registerUser, loginUser } = require("../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
