require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

const app =  express();

mongoose.connect(process.env.DB_CONNECTIONSTRING, {
    useNewUrlParser: true
});


const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Db Connected'));

app.use(express.json());

const partsRouter = require('./routes/parts');
app.use('/parts', partsRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000, () => console.log('hey mate')); 