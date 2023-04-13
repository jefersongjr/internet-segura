const DataRoute = require('express').Router();
const DataController = require('../controllers/DataController');

DataRoute.get('/dados', DataController.getAllData);

module.exports = DataRoute;  