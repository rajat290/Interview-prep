const auth = (req, res, next) => {
    const token = req.query.token;

    if (token === 'secret123') {
        console.log('Authenticated!');
        next();
    } else {
        console.log('Authentication failed!');
        res.status(401).send('Unauthorized!');
    }
    };

module.exports = auth;