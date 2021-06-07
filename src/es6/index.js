
// ! Default Params
// Declaration of default values before ecmascript 6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// Declaration of default values in ecmascript 6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

// ! Concatenation
let hello = "Hello";
let world = "World";

// Concatenation before ecmascript 6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

// Concatenation in ecmascript 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ! Mutiline EcmaScript 6
let lorem = "first sentence \n" + "second sentence" // Before 

let lorem2 = `first sentence
second sentence`; // ES6

console.log(lorem);
console.log(lorem2)

// ! Access elements of an object EcmaScript 6
let person = {
    'name': 'oscar',
    'age': '32',
    'country': 'MX'
}

console.log(person.name, person.age); // Before

let { name, age } = person; // ES6
console.log(name, age);

// ! Spread EcmaScript 6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Oscar', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// ! Var vs Let
{
    var Var = "Var"; // Var has a global scope
}
{
    let Let = 'Let'; // Let has a local scope
    console.log(Let);
}
console.log(Var);
// console.log(Let); ERROR

// ! Const
// Const is immutable
const a = 'b';
// a = 'a'; ERROR

// ! Object definition
let name = 'AME';
let age = 32;

// ES5
obj = {
    name: name,
    age: age
};
// ES6
obj2 = { name, age };
console.log(obj2);

// ! Arrow Functions
const names = [
    { name: 'AME', age: 100 },
    { name: 'Juan', age: 25 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
}); // before

let listOfNames2 = names.map(item => console.log(item.name)); //ES6

// const listOfNames3 = (name, age, country) => {
//     ...
// };

// const listOfNames4 = name => {
//     ...
// };

// const square = num => num * num;

// ! Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        }
        else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// ! Clases ES6
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// ! Export and Import
const hello = require('./module') // old syntax
import { hello } from '.module'; // ES6


console.log(hello());

// ! Generators
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); // Hello, 
console.log(generatorHello.next().value); // World
console.log(generatorHello.next().value); // undefined


