let validator = {
    set: function(obj, prop, value) {
        if (prop === 'gender'){
            if (value !== 'male' && value !== 'female'){
                throw new TypeError("The gender is invalid");
            }   
        }
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value >200 && value < 0) {
                throw new RangeError('The age seems invalid');
            }
        }
        console.log(`Setting value '${value}' to '${prop}'`);
        obj[prop] = value;
        return true;
    },

    get: function(obj, prop) {
        console.log(`Trying to access the property '${prop}'...`);
        return obj[prop];
    }
}
