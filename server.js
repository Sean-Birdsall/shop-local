var express = require('express');
var Routes = require('./routes.js');
var mongoose = require('mongoose');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));

Routes(app);

app.listen(PORT, (err) => {
  if (err) {
    console.log('Server Error', err)
  } else {
    console.log(`Server up and running on port: ${PORT}`);
  }
})