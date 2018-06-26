const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const mongoose = require('mongoose');

require('dotenv').config()
const db = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds263640.mlab.com:63640/dci-db-mongo'

// Connect to MongoDB
mongoose.connect(db);

switch(mongoose.connection.readyState) {
  case 0:
    console.log('db disconnected');
  case 1:
    console.log('db connected');
  case 2:
    console.log('db connecting...');
  case 3:
    console.log('db disconnecting...');
}

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
