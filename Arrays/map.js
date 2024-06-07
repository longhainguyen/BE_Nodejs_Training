// Create a Map
const fruits1 = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200],
]);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set('', 500);
fruits.set('bananas', 300);
fruits.set('oranges', 200);

fruits.set('apples', 200);
console.log(fruits.has('apples'));

console.log(fruits.get('apples'));

for (const x of fruits) {
    console.log(x[0]);
}
