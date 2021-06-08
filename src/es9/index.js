
// ! Spread - separate object ES9
const obj = {
    name: 'chris',
    age: 21,
    country: 'MX'
};

let { country, ...all } = obj;
console.log(all);
// { name: 'chris', age: 21 }

// ! Spread and union object ES9
const obj = {
    name: 'chris',
    age: 21
};

const obj1 = {
    ...obj,
    country: 'MX'
};

console.log(obj1);
//{ name: 'chris', age: 21, country: 'MX' }

// ! Promise Finally ES9
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response)) //Hello World
    .catch(error => console.log(eror)) // Test Error
    .finally(() => console.log('Finalizo')); // Finalizo

// ! Regex - Groups ES9
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day); // 2018 04 20


