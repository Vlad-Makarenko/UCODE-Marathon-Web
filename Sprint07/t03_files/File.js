const fs = require('fs');


module.exports = class File { 
    constructor(name){
        this.name = name;
        this.create();
    }

    create() {
        try {
            if(!fs.existsSync(__dirname + '/temp')){
                fs.mkdirSync(__dirname + '/temp');
            }
            fs.appendFileSync(__dirname + '/temp/' + this.name, '');
        }
        catch (err){
            console.error(err);
        }
    }

    write(content){
        try {
            if(!fs.existsSync(__dirname + '/temp')){
                fs.mkdirSync(__dirname + '/temp');
            }
            fs.appendFileSync(__dirname + '/temp/' + this.name, content);
        }
        catch (err){
            console.error(err);
        }
    }

    read(){
        return fs.readFileSync(__dirname + '/temp/' + this.name).toString();
    }

    delete(){
        fs.unlinkSync(__dirname + '/temp/' + this.name);
    }
}