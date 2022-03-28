class Avenger{
    /**
     * 
     * @param {Object} obj 
     */
    constructor(obj){
            this.name = obj.name;
            this.alias = obj.alias;
            this.gender = obj.gender;
            this.age = obj.age;
            this.powers = obj.powers;
        
        this.anonFunc = () => {
            let arr = [`${this.alias.toUpperCase()}`].concat(this.powers);
            return arr.join('\n');
        }

        this.anonFunc.toString = () => {
            return [`name: ${this.name}`,
            `gender: ${this.gender}`,
            `age: ${this.age}`
            ].join('\n');

        }

        Object.defineProperty(this.anonFunc, 'name', {'value': this.constructor.name})
        return this.anonFunc;

    }
}

module.exports.Avenger = Avenger; 
