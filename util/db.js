var mysql = require('mysql');
var dotenv = require('dotenv');
var util = require('util');

dotenv.config();

var connection = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBSCHEMA
})

connection.query = util.promisify(connection.query);

module.exports = connection;