if(!process.env.NODE_ENV || process.env.NODE_ENV==='development'){
    require('dotenv').config();
};

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('short'));

// Routes
app.use('/api', routes);

// Error Handler
app.use(errorHandler);

module.exports = app;