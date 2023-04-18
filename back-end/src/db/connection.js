require('dotenv').config();
const { Pool } = require('pg');

const {
  PGHOST,
  PGPORT,
  PGDATABASE,
  PGUSER,
  PGPASSWORD
} = process.env;

const pool = new Pool({
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  sslmode:'require'
  
});

module.exports = pool;