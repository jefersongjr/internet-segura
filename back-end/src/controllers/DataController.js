const DataService = require('../services/DataService');
const iconv = require('iconv-lite');

const getAllData = async ( request, response) => {
    const data = await DataService.getData();
    console.log(iconv.decode(Buffer.from(data[0].conteudo, 'binary'), 'utf-8'));
    return response.status(200).json(data);  
};
  
module.exports = {
    getAllData
}