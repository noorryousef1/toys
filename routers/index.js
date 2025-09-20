const apiRouter = require('express').Router();
const toysRouter = require('./toysRouter');

apiRouter.use('/toys', toysRouter);


module.exports = apiRouter;