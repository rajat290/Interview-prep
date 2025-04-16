// ===== BACKEND (middleware/authMiddleware.js) =====
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ msg: "No token" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
}

function isAdmin(req, res, next) {
  if (req.user.role !== "admin") return res.status(403).json({ msg: "Access denied" });
  next();
}

module.exports = { authMiddleware, isAdmin };