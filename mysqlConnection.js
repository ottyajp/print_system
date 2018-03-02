const mysql = require('mysql');

const dbConfig = {
    host: '127.0.0.1',
    user: 'ps',
    password: 'ps',
    database: 'ps'
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
