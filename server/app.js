var express = require('express');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var router = require('./router');

dotenv.config();

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send('Hello Acamica');
});

app.use('/', router);

module.exports = app;