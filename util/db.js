const mysql = require('mysql');
const dotenv = require('dotenv');
const util = require('util');

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBSCHEMA
})

connection.query = util.promisify(connection.query);

module.exports = connection;