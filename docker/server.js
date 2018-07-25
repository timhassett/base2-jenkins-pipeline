var http = require('http');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var hostname = process.env.HOSTNAME || 'not-set';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index.ejs', {hostname: hostname});
});

http.createServer(app).listen(port);
