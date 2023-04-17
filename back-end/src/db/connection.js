require('dotenv').config();
const mysql = require('mysql2/promise');

const { MYSQL_ADDON_DB, MYSQL_ADDON_HOST,MYSQL_ADDON_USER, MYSQL_ADDON_PASSWORD, MYSQL_ADDON_PORT } = process.env;

const connection = mysql.createPool({
    host: MYSQL_ADDON_HOST,
    port: MYSQL_ADDON_PORT,
    user: MYSQL_ADDON_USER,
    password: MYSQL_ADDON_PASSWORD,
    database: MYSQL_ADDON_DB,
    charset: 'utf8mb4',
});

module.exports = connection;