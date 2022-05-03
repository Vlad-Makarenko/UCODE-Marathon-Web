const conn = require('../db');
const Model = require('../model');

module.exports = class User extends Model {
    constructor(login, password, name='', email='', status='user'){
        super('users');
        this.id = 0;
        this.login = login;
        this.password = password;
        this.name = name;
        this.email = email;
        this.status = status;
    }

    async isExist() {
        const query_str = `SELECT * FROM ${this.table} WHERE login='${this.login}'`;
        const result = await conn.promise().query(query_str);
        return (result[0].length > 0)
    }


    async findBy(property, value) {
        const query_str = `SELECT * FROM ${this.table} WHERE ${property}='${value}'`;
        const result = await conn.promise().query(query_str);
        if(result[0].length > 0){
            this.id = result[0][0]['id'];
            this.login = result[0][0]['login'];
            this.password = result[0][0]['password'];
            this.name = result[0][0]['name'];
            this.email = result[0][0]['email'];
            this.status = result[0][0]['status'];
            return this;
        }else {
            return null;
        }
    }
    
    async save() {
        console.log(this);
        if(await this.isExist()){
            const query_str = `UPDATE ${this.table} SET password='${this.password}' WHERE login='${this.login}';`;
            await conn.promise().query(query_str);
        } else {
            const query_str = `INSERT INTO ${this.table}(name, login, email, password, status) VALUES('${this.name}', '${this.login}', '${this.email}', '${this.password}', '${this.status}')`
            await conn.promise().query(query_str);
        }

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