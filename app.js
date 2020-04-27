require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const exerciseRouter = require('./routes/exercise');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/exercise', exerciseRouter);

// app.post('/api/exercise/new-user', (req, res, next) => {
//     console.log(req.query)
//     res.json({message: "New user response"});
// });

module.exports = app;
