// 📦 Step 1: Install package

// npm install express-session

// Step 2: Use middleware in your app
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'mySuperSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // true only with HTTPS
}));

app.use(express.json());

// Step 3: Create login route with session
app.post('/login', (req, res) => {
    const { username } = req.body;
  
    // Save username in session
    req.session.user = username;
  
    res.send(`User ${username} logged in`);
  });
  

//   Step 4: Create protected route
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
      res.send(`Welcome back, ${req.session.user}`);
    } else {
      res.status(401).send('Please login first');
    }
  });
  
//   Step 5: Logout route to destroy session
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out successfully');
  });
  