module.exports = class Access {
    get mark_LXXXV(){
        if (typeof(this._mark_LXXXV) == "undefined"){
            return typeof(this._mark_LXXXV); 
        }else if(this._mark_LXXXV == null ){
            return 'null';
        }
        else {
            return this._mark_LXXXV;
        }
    }

    set mark_LXXXV(value){
        this._mark_LXXXV = value;
    }

}