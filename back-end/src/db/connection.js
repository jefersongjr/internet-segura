require('dotenv').config();
const fs = require('fs');
const mysql = require('mysql2/promise');

const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;

const connection = mysql.createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_ROOT_PASSWORD,
    database: 'informacoes',
    charset: 'utf8mb4'
});


module.exports = connection;