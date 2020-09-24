require('dotenv').config();
const server = require('./src/config/server');


server.listen(process.env.PORT, () => console.log('Running on default'));