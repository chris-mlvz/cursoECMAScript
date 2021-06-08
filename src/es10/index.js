
//  ! array flat ES10
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));
// [
//     1, 2, 3, 1, 2,
//     3, 1, 2, 3
// ]

// ! flatMap ES10
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]))
// [
//     1, 2, 2, 4,  3,
//     6, 4, 8, 5, 10
// ]

// ! trim ES10
// trimStart
let hello = '               hello world';
console.log(hello) //                hello world
console.log(hello.trimStart()); // hello world

//trimEnd
let hello = 'hello World                ';
console.log(hello); // hello World                
console.log(hello.trimEnd()); // hello World

// !Optional catch biding ES10
try {

} catch // without (error)
{
    error
}

// ! fromEntries ES10 - array to object 
let entries = [["name", "chris"], ["age", 21]];
console.log(Object.fromEntries(entries));
// { name: 'chris', age: 21 }

// ! symbol object ES10
let mySymbl = `My simbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
// My simbol