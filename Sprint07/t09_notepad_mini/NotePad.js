const fs = require('fs');
const Note = require('./Note');

module.exports = class NotePad {
    constructor(){
        this.path = __dirname + '/notes/';
        if(!fs.existsSync(this.path)){
            fs.mkdirSync(this.path);
        }
    }

    /**
     * 
     * @param {Note} note 
     */
    addNote(note){
        fs.writeFileSync(`${this.path}${note.name}`, JSON.stringify(note));
        
    }

    getAllNotes(){
        const Fnotes = fs.readdirSync(this.path);
        const resNotes = [];
        for (let index = 0; index < Fnotes.length; index++) {
            const element = Fnotes[index];
            resNotes.push(JSON.parse(fs.readFileSync(this.path + element)));
        }
        return resNotes;
    }
    /**
     * 
     * @param {Note} note 
     */
    DeleteNote(note){
        fs.unlinkSync(this.path + note);
    }

    getNote(name){
        return JSON.parse(fs.readFileSync(this.path + name));
    }
    

}