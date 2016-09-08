var express = require('express');

var PORT = 8000;

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var os = require('os');
var hostname = os.hostname();

app.get('/', function (req, res) {
      res.render('index', {hostname: hostname});
	});

app.get('/concat', function (req, res) {
      res.render('concat', {hostname: hostname});
	});

app.get('/arrJoin', function (req, res) {
      res.render('arrjoin', {hostname: hostname});
	});

if(!module.parent){
app.listen(PORT);
}

console.log('Running on port ' + PORT);
module.exports.getApp = app;