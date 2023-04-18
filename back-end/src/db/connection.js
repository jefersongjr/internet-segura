require('dotenv').config();
const { Pool } = require('pg');

const {
  PGHOST,
  PGPORT,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  DATABASE_URL
} = process.env;

const pool = new Pool({
  connectionString: DATABASE_URL,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD
  
});

module.exports = pool;