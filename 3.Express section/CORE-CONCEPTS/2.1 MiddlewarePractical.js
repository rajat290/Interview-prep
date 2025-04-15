const express = require('express');
const app = express();

// Custom middleware
const myLogger = (req, res, next) => {
  console.log(`Request method: ${req.method} | URL: ${req.url}`);
  next(); // Pass control to next middleware or route handler
};

// Apply middleware
app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Home page');
});

app.listen(3000);


/*
🧾 Output:
If you open http://localhost:3000/, you'll see in terminal:

Request method: GET | URL: /

*/