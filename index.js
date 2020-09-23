require('dotenv').config();
const server = require('./src/config/server');


app.listen(process.env.PORT, () => console.log('Running on default'));