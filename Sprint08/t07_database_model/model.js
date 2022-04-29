const conn = require('./db');

module.exports = class Model {
    constructor(table){
        this.table = table;
    }

    find(id){
        const query_str = `SELECT * FROM ${this.table} WHERE id=${id}`;
        conn.query(query_str, (err, res) => {
            if(err){
                console.log(err);
            } else {
                console.log(res);
            }
        })
    }

    save(){
        console.log('save some data..');
    }

    delete(id){
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