const user = {
    name: 'Steve',
    surname: 'Rogers',
    age: 101,
    city: 'New York'
}

console.log(user);

let cpy = copyObj(user);
console.log(cpy);

user.name = 'John';
console.log(user);
console.log(cpy);

cpy.age = 59;
console.log(user);
console.log(cpy);
