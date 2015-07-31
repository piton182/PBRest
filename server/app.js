var express = require('express');
var fs = require('fs');
var app = express();
var apiVersion = '0.1';

app.get('/api/flight/:flightNo/:date/allocation', function (req, res) {
  raw = fs.readFileSync('allocation-response' + apiVersion + '.json', { encoding: 'UTF8' });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(raw);
});

app.get('/api/flight/:flightNo/:date/configuration', function (req, res) {
  raw = fs.readFileSync('config-response' + apiVersion + '.json', { encoding: 'UTF8' });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(raw);
});

var server = app.listen(3000, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
