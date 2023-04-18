const pool = require('../db/connection');

const findData = async () => {
  const result = await pool.query(
    ` SELECT dados_id, img_url, titulo, conteudo, faixa_etaria, tipo_info
    FROM informacoes.dados as dados
     JOIN informacoes.faixa_etaria as faixa_etaria ON dados.faixa_etaria_id = faixa_etaria.faixa_etaria_id
    JOIN informacoes.tipo_info as tipo_info ON dados.tipo_id = tipo_info.tipo_id`,
  );
  return result;
};

module.exports = {
    findData,
};