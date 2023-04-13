const connection = require('../db/connection');

const findData = async () => {
  const [result] = await connection.execute(
    `SELECT dados_id, img_url, titulo, conteudo, faixa_etaria, tipo_info
    FROM dados
    JOIN faixa_etaria ON dados.faixa_etaria_id = faixa_etaria.faixa_etaria_id
    JOIN tipo_info ON dados.tipo_id = tipo_info.tipo_id`,
  );
  return result;
};

module.exports = {
    findData,
};