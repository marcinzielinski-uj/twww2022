var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var xxxxxRouter = require('');
//var helloRouter = require('./routes/hello');
var nbpRouter = require('./routes/nbp');
var worldRouter = require('./routes/world');


var app = express();// ---> Utworzenie aplikacji Express.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// http://localhost:3000/
app.use('/', indexRouter);

// http://localhost:3000/users/.....
app.use('/users', usersRouter);

// http://localhost:3000/hello
//app.use('/hello', helloRouter);
app.use('/nbp', nbpRouter);

app.use('/world',worldRouter);




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
