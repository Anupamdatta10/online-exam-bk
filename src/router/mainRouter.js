const express = require('express');

const publicRouter = express.Router();
const authRouter = express.Router();


//const userRouter = require('./users/userRouter')
const subjectRouter= require('./subject/subjectRouter')

publicRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Session');
    res.header('Access-Control-Allow-Headers', 'Accesstoken');
    next();
});

authRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization');
    res.header('Access-Control-Allow-Headers', 'Accesstoken');
    next();
});

//publicRouter.use('/users', userRouter);
//publicRouter.use('/questions', questionRouter);
publicRouter.use('/subject', subjectRouter);
module.exports = { authRouter, publicRouter };