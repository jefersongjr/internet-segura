import { Pool } from 'pg';
require('dotenv').config();

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
});

export default pool;