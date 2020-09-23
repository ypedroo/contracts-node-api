const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTIONSTRING, {
    useNewUrlParser: true
});


const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Db Connected'));

module.exports = db;
