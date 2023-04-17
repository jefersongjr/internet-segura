require('dotenv').config();
const mysql = require('mysql2/promise');

const { MYSQL_USER, MYSQL_ROOT_PASSWORD, MYSQL_HOST, MYSQL_PORT , MYSQL_DB} = process.env;

const PLANETSCALE_DB_HOST = MYSQL_HOST;
const PLANETSCALE_DB = MYSQL_DB;
const PLANETSCALE_DB_PASSWORD = MYSQL_ROOT_PASSWORD;
const PLANETSCALE_DB_USERNAME = MYSQL_USER;


const connection = mysql.createPool({
    host: PLANETSCALE_DB_HOST,
    port: MYSQL_PORT,
    user: PLANETSCALE_DB_USERNAME,
    password: PLANETSCALE_DB_PASSWORD,
    database: PLANETSCALE_DB,
    charset: 'utf8mb4',
});

module.exports = connection;