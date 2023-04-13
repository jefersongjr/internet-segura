const express = require('express');
const DataRoute = require('./routes/DataRoute');

const app = express();

app.use(express.json());
app.use(DataRoute);

module.exports = app;