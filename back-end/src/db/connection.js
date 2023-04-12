require('dotenv').config();
const mysql = require('mysql2/promise');

const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3001,
    user: process.env.MYSQL_HOST,
    password: MYSQL_ROOT_PASSWORD,
    database: 'informacoes',
});

module.exports = connection;