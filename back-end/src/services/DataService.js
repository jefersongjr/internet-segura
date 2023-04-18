const DataModel = require('../models/DataModel');

const getData = async () => {

    const products = await DataModel.findData();
    if(!products) throw new Error('o loco')
    return products;
  };

  module.exports = {
    getData,
  };