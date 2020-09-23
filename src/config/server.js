require('dotenv').config();
const routes = require('../routes/routes');

const express = require('express');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../doc/Swagger.json');

const app =  express();

app.use(express.json());

app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;