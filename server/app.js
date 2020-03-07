// import files and packages up here

const express = require('express');
const morgan = require('morgan');
const http = require('http');
const data = require('../server/data.json');


// create your express server below
var app = express();



// add your routes and middleware below
app.get('/', function(req, res){
  res.status(200).send('its working');
});

app.get('/data'), function (req , res){


}



// finally export the express application

module.exports = app;
