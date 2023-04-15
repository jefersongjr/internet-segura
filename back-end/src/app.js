const express = require('express');
const DataRoute = require('./routes/DataRoute');
const dataMock = require('../tests/mocks/dataMock.json');

const app = express();

app.use(express.json());
app.get('/', (req, res) => res.json(dataMock));

app.use(DataRoute);

module.exports = app;