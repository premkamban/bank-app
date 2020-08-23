const express = require('express');
const app = express();
const userRoutes = require('./api/routes/products');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb + srv://premkamban:prem376906@cluster0.s6z97.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useMongoClient: true
})

app.use(morgan('dev'));
app.use('/', userRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;