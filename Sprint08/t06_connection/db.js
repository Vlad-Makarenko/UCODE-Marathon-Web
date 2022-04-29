const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
})

connection.connect( err => {
    if (err) {
        console.log(err)
        return err;
    } else {
        console.log(`Connected to ${config.database} db ------ OK`);
    }
})