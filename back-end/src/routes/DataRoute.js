const DataRoute = require('express').Router();
const DataController = require('../controllers/DataController');

DataRoute.get('/', DataController.getAllData);

module.exports = DataRoute;  