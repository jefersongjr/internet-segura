const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const { MYSQL_USER, MYSQL_ROOT_PASSWORD, MYSQL_HOST, MYSQL_PORT } = process.env;

const { cwd } = process;

const connect = () => mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_ROOT_PASSWORD,
  database: 'informacoes',
  multipleStatements: true,
});

const runSql = (file) => async () => {
  const db = connect();
  const sql = fs.readFileSync(file, 'utf8');
  await db.query(sql);
  await db.end();
};

const runMigration = runSql(path.resolve(cwd(), 'migration.sql'));
const runSeed = runSql(path.resolve(cwd(), 'seed.sql'));

module.exports = {
  connect,
  runMigration,
  runSeed,
};
