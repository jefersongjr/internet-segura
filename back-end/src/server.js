const app = require('./app');
const pool = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API está sendo executada na porta ${PORT}`);
  try {
    const res = await pool.query('SELECT 1');
    if (res.rowCount >= 1) {
      console.log('PostgreSQL connection ok');
    }
  } catch (err) {
    console.error('PostgreSQL connection error', err);
  }
});
