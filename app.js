if(!process.env.NODE_ENV || process.env.NODE_ENV==='development'){
    require('dotenv').config();
};

const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

// Check mongoose connection
mongoose.connect(`mongoose.connect('mongodb://127.0.0.1/intrace`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connect to mongodb')
});

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/', routes);

// Error Handler
app.use(errorHandler);

module.exports = app;