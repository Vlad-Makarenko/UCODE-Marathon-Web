module.exports = class StrFrequency {
    /**
     * 
     * @param {String} str 
     */
    constructor(str){
        this.str = str;
    }

    letterFrequencies() {
        let clearStrArr = this.str.replace(/[^a-zA-Z\s]/gi, '').toUpperCase().split('');
        let object = new Object();
        for(let x = 0; x < clearStrArr.length; x++){
            if(clearStrArr[x] in object){
                object[clearStrArr[x]] += 1;
            } else if (clearStrArr[x] !== ' '){
                object[clearStrArr[x]] = 1;
            }
        }
        return object;
    }

    wordFrequencies() {
        let clearStr = this.str.replace(/[^a-zA-Z\s]/gi, '');
        let clearStrArr = clearStr.replace(/ +/g, ' ').trim().toUpperCase().split(' ');
        let object = new Object();
        for(let x = 0; x < clearStrArr.length; x++){
            if(clearStrArr[x] in object){
                object[clearStrArr[x]] += 1;
            } else {
                object[clearStrArr[x]] = 1;
            }
        }
        return object;
    }

    reverseString() {
        return this.str.split('').reverse().join('');
    }
}