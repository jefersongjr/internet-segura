const DataService = require('../services/DataService');

const getAllData = async (request, response) => {
    const data = await DataService.getData();
    return response.status(200).json(data);  
};
  
module.exports = {
    getAllData,
};