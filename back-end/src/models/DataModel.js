const connection = require('../db/connection');

const findData = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM `dados`',
  );
  return result;
};

module.exports = {
    findData
}