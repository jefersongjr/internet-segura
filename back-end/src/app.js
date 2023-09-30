const express = require('express');
const cors = require('cors');
const DataRoute = require('./routes/DataRoute');

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  }

  
app.use(express.json());

app.use(cors(corsOptions));

app.use(DataRoute);

module.exports = app;