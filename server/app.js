const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./router');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send('Hello from API!');
});

app.use('/', router);

module.exports = app;