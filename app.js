require("dotenv").config({path:__dirname + "/.env"});

const createError = require('http-errors');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(()=> {
        console.log("connected to mongo")
    })
    .catch((err)=> {
        console.log("not connected to mongo", err)
    })

const app = express();

app.use(cors({
  origin: ["https://animal-hostel.herokuapp.com", "http://animal-hostel.herokuapp.com", "http://localhost:3001", "localhost:3001", "http://127.0.0.1:3001", "http://127.0.0.1:3001/", "127.0.0.1:3001/"],
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: process.env.CO0KIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000
    }
  }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));

// routes
app.use('/', indexRouter);
app.use('/auth', require('./routes/auth'));
app.use('/users', usersRouter);
app.use('/api', require('./routes/offers'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
