const mysql = require('mysql2');
const config = require('./config.json');
const fs = require('fs');

var query_str = fs.readFileSync('db.sql').toString();

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
        connection.query(query_str, (err) => {
            if (err){
                console.log(err);
            }
        })
        console.log(`Connected to ${config.database} db ------ OK`);
    }
})

module.exports = connection;
