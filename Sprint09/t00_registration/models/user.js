const conn = require('../db');
const Model = require('../model');

module.exports = class User extends Model {
    constructor(name, login, password, email){
        super('users');
        this.id = 0;
        this.name = name;
        this.login = login;
        this.password = password;
        this.email = email;
    }


    find(id) {
        const query_str = `SELECT * FROM ${this.table} WHERE id=${id}`;
        conn.query(query_str, (err, res) => {
            if(err){
                console.log(err);
            } else {
                console.log(res);
            }
        })
    }
    
    save() {
        const query_str = `INSERT INTO ${this.table}(name, login, email, password) VALUES('${this.name}', '${this.login}', '${this.email}', '${this.password}')`
        conn.query(query_str, (err, rows) => {
            if (err) {
                console.log(err);
            }
            else {
                this.id = rows.insertId;
                console.log(`row with login ${this.login} added`);
            }
        })

    }

    delete(id) {
        const query_str = `DELETE FROM ${this.table} WHERE id=${id}`;
        conn.query(query_str, (err) => {
            if(err){
                console.log(err);
            } else {
                console.log(`row by id =${id} is deleted from ${this.table} table`);
            }
        })
    }
}