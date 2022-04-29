const conn = require('../db');
const Model = require('../model');

module.exports = class Hero extends Model {
    constructor(name, description, class_role){
        super('heroes');
        this.name = name;
        this.description = description;
        this.class_role = class_role;
    }

    find(id) {
        super.find(id);
    }
    
    save() {
        const query_str1 = `SELECT name FROM ${this.table} WHERE name='${this.name}'`;

        conn.query(query_str1, (err, res) => {
            if(err){
                console.log(err);
            } else {
                if(res.length > 0){
                    const query_str2 = `UPDATE ${this.table} SET description = '${this.description}', class_role = '${this.class_role}' WHERE name='${this.name}'`
                    conn.query(query_str2, (err) => {
                        if (err) console.log(err);
                        else console.log(`row with name ${this.name} updated`);
                    })
                } else {
                    const query_str2 = `INSERT INTO ${this.table}(name, description, class_role) VALUES('${this.name}', '${this.description}', '${this.class_role}')`
                    conn.query(query_str2, (err) => {
                        if (err) console.log(err);
                        else console.log(`row with name ${this.name} added`);
                    })
                }
            }
        })
    }

    delete(id) {
        super.delete(id);
        
    }
}