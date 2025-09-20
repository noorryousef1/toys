const express = require('express');
const admin = require('./data/admin');

const apiRouter = require('./routers');
const authmiddleware = require('./middlewares/authMiddleware');
const app = express();
const port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
app.use(authmiddleware);
app.get('/', authmiddleware,(req, res) => {
    res.send('Welcome to the Toy API');
});
 app.use('/api', authmiddleware,apiRouter);


