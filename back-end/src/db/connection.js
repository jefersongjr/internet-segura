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
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  connectionString: DATABASE_URL,
  sslmode: 'require'
  
});

module.exports = pool;