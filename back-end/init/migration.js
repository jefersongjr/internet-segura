const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

const connect = () => new Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
});

const runSql = (file) => async () => {
  const db = connect();
  const sql = fs.readFileSync(file, 'utf8');
  await db.query(sql);
  await db.end();
};

const runMigration = runSql(path.resolve(process.cwd(), 'migration.sql'));
const runSeed = runSql(path.resolve(process.cwd(), 'seed.sql'));

module.exports = {
  connect,
  runMigration,
  runSeed,
};
