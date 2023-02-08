const mongoose = require('mongoose');

module.exports = () => {

    const db_url = process.env.DB_URI.replace('<PASSWORD>', process.env.DB_PASS).replace('<DB_NAME>', process.env.DB_NAME)
    
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('Database Connected');
    });
};