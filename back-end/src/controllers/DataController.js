const DataService = require('../services/DataService');

const getAllData = async (request, response, next) => {
    try {
        const data = await DataService.getData();
        return response.status(200).json(data);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllData,
};