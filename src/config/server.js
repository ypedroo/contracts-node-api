require('dotenv').config();
const routes = require('../routes/routes');

const express = require('express');

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../doc/Swagger.json');

const app =  express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;