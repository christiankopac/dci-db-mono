require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');

const port = 3000;
const db = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds263640.mlab.com:63640/dci-db-mongo';

// CONNECT TO MONGO
mongoose.connect(db);
// CHECK CONNECTION STATUS
switch(mongoose.connection.readyState) {
  case 0:
    console.log('db disconnected');
    break;
  case 1:
    console.log('db connected');
    break;
  case 2:
    console.log('db connecting...');
    break;
  case 3:
    console.log('db disconnecting...');
    break;
}

let app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);

app.listen(port, function () {
  console.log('Server is running at port:', port);
});

module.exports = app;