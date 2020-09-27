require('dotenv').config();
const router = require('../routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../doc/Swagger.json');

const app =  express();

mongoose.connect(process.env.DB_CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Db Connected'));
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;