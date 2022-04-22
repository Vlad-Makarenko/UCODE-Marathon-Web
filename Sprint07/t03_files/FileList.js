const fs = require('fs');

module.exports = class FileList {
    constructor(){
        if(!fs.existsSync(__dirname + '/temp')){
            fs.mkdirSync(__dirname + '/temp');
        }
    }
    getList(){
        return fs.readdirSync(__dirname + '/temp');
    }
    hasFiles(){
        const files = fs.readdirSync(__dirname + '/temp');
        return files.length !== 0;
    }
    getHTMLList(){
        let HTMLCode = '<ul>'
        const files = fs.readdirSync(__dirname + '/temp');
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            HTMLCode += `<li><a href="/select-file?file=${element}">${element}</a></li>`;
        }
        HTMLCode += '</ul>';
        return HTMLCode
    }
}