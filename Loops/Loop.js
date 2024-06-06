// for ---------------------------------------------
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for in -----------------------------------------------
// const person = { fname: 'John', lname: 'Doe', age: 25 };

// let text = '';
// for (let x in person) {
//     text += person[x];
// }

// for each ---------------------------------------------------

// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// for of ---------------------------------------------------------

// for... in lặp qua các key của enumerable properties trong một object.
// for... of lặp qua các phần tử của một iterable object, thuộc tính [Symbol.iterator]

// let colors = ['red', 'green', 'blue'];

// for (let i in colors) {
//     console.log(i); // "0", "1", "2"
// }

// for (let i of colors) {
//     console.log(i); // "red", "green", "blue"
// }

// while ---------------------------------------------------------
let i = 0;
while (i < 0) {
    console.log(i);
    i++;
}

// loop will always be executed at least once
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 0);
