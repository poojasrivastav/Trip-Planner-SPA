var express = require("express");
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('../routes');
const db = require('../models').db;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', routes);

app.use(function(req, res, next) {
  console.log("Hello from app.js");
  next();
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err);
  res.send(err.status);
});

var port = 3000;

app.listen(port, function() {
  console.log("Listening on port " + port);
  // db
  //   .sync()
  //   .then(function() {
  //     console.log('Synchronized the database');
  //   })
  //   .catch(function(err) {
  //     console.error("An error has occurred", err, err.stack);
  //   })
})
