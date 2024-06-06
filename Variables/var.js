// pham vị : global scope, function/local scope
var greeter = 'hey hi';

function newFunction() {
    var hello = 'hello';
}
console.log(hello); // error: hello is not defined

// --------------------------------------------------
//  var có thể khai báo lại
var greeter = 'hey hi';
var greeter = 'say Hello instead';

// ----------------------------------------------------

//  Hoisting của var
console.log(greeter);
var greeter = 'say hello';

//  tương đương
var greeter;
console.log(greeter); // greeter is undefined
greeter = 'say hello';
