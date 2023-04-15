require('dotenv').config();
const mysql = require('mysql2/promise');

const { MYSQL_USER, MYSQL_ROOT_PASSWORD, MYSQL_PORT } = process.env;

const connection = mysql.createPool({
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_ROOT_PASSWORD,
    database: 'informacoes',
    charset: 'utf8mb4',
});

module.exports = connection;