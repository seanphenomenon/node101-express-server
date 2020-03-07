// import files and packages up here

const express = require('express');
const morgan = require('morgan');
const http = require('http');
const data = require('./data.json');


// create your express server below
const app = express();


// add your routes and middleware below


app.use(express.static('server'));

app.get('/', function(req, res){
  res.status(200).send('its working');
});

// The "/data" is needed in localhost url in order to see the data
app.get('/data',function(req, res){
  res.status(200).send(data);
});


// finally export the express application

module.exports = app;
