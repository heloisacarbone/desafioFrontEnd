/**
 * Created by heloisa.r.carbone on 11/7/2016.
 */

var express = require('express');
var path = require('path');
var users = require('./users-controller');

var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/frontend'));

app.get('/data', users.get);

var port = (process.env.PORT || 8080);
app.listen(port);
console.log('listen on 8080')
