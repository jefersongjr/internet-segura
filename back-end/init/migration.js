const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE, DATABASE_URL } = process.env;

const connect = () => new Pool({
  connectionString: DATABASE_URL,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  ssl: { rejectUnauthorized: false }
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
