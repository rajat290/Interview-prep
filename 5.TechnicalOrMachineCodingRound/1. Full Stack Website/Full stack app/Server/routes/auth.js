const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

let users = []; // In-memory user storage

router.post("/register", async (req, res) => {
  console.log("Registration request received:", req.body);
  const { name, email, password, role } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashed, role };
    users.push(newUser); // Store user in memory
    res.status(201).json({ msg: "User registered" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ msg: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email); // Check in-memory users
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
  const token = jwt.sign({ id: user.email, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
});

// Admin - List all users
router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;
