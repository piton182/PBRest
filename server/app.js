var express = require('express');
var fs = require('fs');
var app = express();
var apiVersion = '0.1';

var flightsMap = {
    "NVR123": "aircraft_configuration_one_deck.json",
    "NVR124": "aircraft_configuration_two_deck.json"
};

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/api/flight/:flightNo/:date/configuration', function (req, res) {
    var fileName = flightsMap[req.params.flightNo];
    var raw = fs.readFileSync(fileName ? fileName : "aircraft_configuration_one_deck", {encoding: 'UTF8'});
    res.send(raw);
});

var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
