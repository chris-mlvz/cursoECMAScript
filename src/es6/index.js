
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


let hello = "Hello";
let world = "World";

// Concatenation before ecmascript 6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

// Concatenation in ecmascript 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);