const express = require('express');
const DataRoute = require('./routes/DataRoute');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    return res.json('hello world');
});

app.use(DataRoute);

module.exports = app;