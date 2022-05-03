
module.exports = class Model {
    constructor(table){
        this.table = table;
    }

    find(id){
        console.log('find some data..');
    }

    save(){
        console.log('save some data..');
    }

    delete(id){
        console.log('delete some data..');
    }
}
