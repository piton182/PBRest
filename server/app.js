var express = require('express');
var fs = require('fs');
var app = express();
var apiVersion = '0.1';

var options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*');
  }
};

app.use(express.static('public', options));

app.get('/api/flight/:flightNo/:date/configuration', function (req, res) {
  raw = fs.readFileSync('config-response' + apiVersion + '.json', { encoding: 'UTF8' });
  res.send(raw);
});

var server = app.listen(3000, function () {
  var host = 'localhost';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
