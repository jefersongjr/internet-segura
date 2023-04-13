const DataModel = require('../models/DataModel');

const getData = async () => {
    const products = await DataModel.findData();
    return products;
  };

  module.exports = {
    getData
  }