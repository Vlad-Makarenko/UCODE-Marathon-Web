class Avenger{
    /**
     * 
     * @param {Object} obj 
     */

    constructor(name, alias, gender, age, powers, hp){

        
        this.anonFunc = () => {
            this.powers = powers;
            this.alias = alias;

            
            let arr = [`${this.alias.toUpperCase()}`].concat(this.powers);

            return arr.join('\n');
        }

        this.anonFunc.toString = () => {
            this._name = name;
            this.gender = gender;
            this.age = age;
            return [`name: ${this._name}`,
            `gender: ${this.gender}`,
            `age: ${this.age}`
            ].join('\n');

        }

        this.anonFunc.hp = hp;

        Object.defineProperty(this.anonFunc, 'name', {'value': this.constructor.name})
        return this.anonFunc;

    }
}

module.exports.Avenger = Avenger; 
