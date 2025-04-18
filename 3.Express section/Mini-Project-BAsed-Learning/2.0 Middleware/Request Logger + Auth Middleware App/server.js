const express = require ('express');
const logger = require ('../middlewares/logger');
const auth = express.Router();

const app = express();

app.use (logger);

//public route 

app.get('./home',(req, res) => {
    res.send ('Welcome to the home page');
})

//private route
app.get ('./dashboard', (req, res) => {
    res.send ('Welcome to the dashboard pagge(Protected page)');
})

//auth middleware

app.listen(3000, () => {
    console.log ('Server is running on port 3000');
})