require('dotenv').config();
import router from './routes/routes.js';
import express, { json } from 'express';
import { connect, connection } from 'mongoose';
import { serve, setup } from 'swagger-ui-express';
import swaggerDocument from './doc/Swagger.json';

const server =  express();

connect(process.env.DB_CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Db Connected'));
server.use(json());
server.use(router);
server.use('/api-docs', serve, setup(swaggerDocument));
server.listen(process.env.PORT, () => console.log('Running on default'));
export default server;