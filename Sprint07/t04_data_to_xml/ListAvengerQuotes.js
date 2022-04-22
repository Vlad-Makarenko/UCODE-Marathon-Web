const AvengerQuote = require('./AvengerQuote');
const xml = require('xml2js');
const fs = require('fs');

module.exports = class ListAvengerQuotes {
    /**
     * 
     * @param {Array} arr 
     */
    constructor(){
        this.arr = [];
        this.xmlPath = __dirname + '/avenger_quote.xml';
    }

    /**
     * 
     * @param {AvengerQuote} quote 
     */
    addQuote(quote){
        this.arr.push(quote);
    }

    toXML(){

        const builder = new xml.Builder();
        const obj = this.arr.reduce((acc, cur) => ({ ...acc, [cur.author]: cur}), {})
        const xmlData = builder.buildObject(obj);
        fs.writeFileSync(this.xmlPath, xmlData);
        return xmlData;
    }

    fromXML(){
        let data = '';
        let toReturn = '';
        if(fs.existsSync(this.xmlPath)){
            data = fs.readFileSync(this.xmlPath).toString();
            const parser = new xml.Parser();
            parser.parseString(data, (err, data) => {
                if(err){
                    return err
                }
                toReturn = data;

            });
            return toReturn;
        }
    }
}