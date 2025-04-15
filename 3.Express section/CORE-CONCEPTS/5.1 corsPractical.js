const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));

// Restrict to specific origin (optional)
app.use(cors({
    origin: 'http://localhost:3000'  // only allow React frontend
  }));
  
//   Allow credentials (if sending cookies/tokens)
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  