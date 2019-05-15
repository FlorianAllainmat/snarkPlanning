const mysql = require('mysql');
const config = require('config');

const connection = mysql.createConnection(config.database);
module.exports = connection;