const express = require('express');
const cors = require('cors');
const DataRoute = require('./routes/DataRoute');

const app = express();

const corsOptions = {
    origin: 'https://internet-segura.vercel.app',
    optionsSuccessStatus: 200
  }

  
app.use(express.json());

app.use(cors(corsOptions));

app.use(DataRoute);

module.exports = app;