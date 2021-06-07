
// ! Object entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// ! Object values
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

// ! Padding
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));

// ! trailing commas
const obj = {
    name: 'oscar',
};

// ! Async Await
// Promise
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
};

// Async and promise
const helloAsync = async () => {
    const hello = await helloWorld();
    // wait until the promise is resolved
    console.log(hello);
};
helloAsync();

// Async with try/catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
};
anotherFunction();