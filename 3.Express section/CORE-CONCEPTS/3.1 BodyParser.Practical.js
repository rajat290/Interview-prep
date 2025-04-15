/*
✅ a) Built-in (for JSON):
js
Copy code
*/

const express = require('express');
const app = express();

// Use built-in body parser for JSON
app.use(express.json());

app.post('/register', (req, res) => {
  console.log(req.body); // you’ll see the JSON sent from client
  res.send(`Welcome ${req.body.name}`);
});

// ✅ b) Built-in (for form / URL-encoded data):

app.use(express.urlencoded({ extended: true }));
