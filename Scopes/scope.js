// vd1
function exampleFunction() {
    const x = 'declared inside function'; // x can only be used in exampleFunction
    console.log('Inside function');
    console.log(x);
}

console.log(x); // Causes error

// --------------------------------------------

const y = 'declared outside function';

exampleFunction();

function exampleFunction() {
    console.log('Inside function');
    console.log(y);
}

console.log('Outside function');
console.log(y);

// ---------------------------------------

{
    var x = 1;
}
console.log(x); // 1

{
    const x = 1;
}
console.log(x); // ReferenceError: x is not defined
