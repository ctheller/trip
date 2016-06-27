var Express = require('express');
var app = new Express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var routes = require('./routes/');

var server = app.listen(3000);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// point res.render to the proper directory
app.set('views', __dirname + '/views');
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files
// have it use swig to do so
app.engine('html', swig.renderFile);
// turn of swig's caching
swig.setDefaults({cache: false});

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error', {error: err});
});

module.exports = app;
