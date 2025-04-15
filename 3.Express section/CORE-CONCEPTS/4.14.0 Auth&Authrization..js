// 🛠 2. Create a simple register + login system

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = []; // Temporary memory-based store

// Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPass });
  res.send('User registered');
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send('Invalid password');

  const token = jwt.sign({ username }, 'secretkey');
  res.json({ token });
});


// PROTECT ROUTES (Authorization)
// Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).send('Token missing');
  
    try {
      const decoded = jwt.verify(token, 'secretkey');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).send('Invalid token');
    }
  };
  
  // Protected Route
 // Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).send('Token missing');
  
    try {
      const decoded = jwt.verify(token, 'secretkey');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).send('Invalid token');
    }
  };
  
  // Protected Route

  // Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(403).send('Token missing');
  
    try {
      const decoded = jwt.verify(token, 'secretkey');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).send('Invalid token');
    }
  };
  app.get('/dashboard', authMiddleware, (req, res) => {
    res.send(`Welcome ${req.user.username}, this is your dashboard`);
  });
  