// --------------------------------------------------
// biến có phạm vi trong hàm hoặc phạm vi toàn cục, tùy chọn
// khởi tạo mỗi biến với một giá trị.
var x = 1;

if (x === 1) {
    var x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 2

// --------------------------------------------------

// Quan trọng là, các cấu trúc khối khác, bao gồm các câu
// lệnh khối, try...catch, switch, tiêu đề của một trong các
// câu lệnh for, không tạo ra phạm vi cho var, và các biến
// được khai báo với var bên trong khối đó có thể tiếp tục
// được tham chiếu bên ngoài khối.

for (var a of [1, 2, 3]);
console.log(a); // 3

// --------------------------------------------------

// hoisting
// Các khai báo var, dù chúng xuất hiện ở đâu trong một
// script, đều được xử lý trước khi bất kỳ đoạn mã nào trong
// script được thực thi.

bla = 2;
var bla;
//  ===
var bla;
bla = 2;

// Chỉ có khai báo của một biến được hoisting, không phải
// khởi tạo của nó.
function doSomething() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
}

// ===

function doSomething() {
    var bar;
    console.log(bar); // undefined
    bar = 111;
    console.log(bar); // 111
}

// --------------------------------------------------

// Redeclarations

var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined

// Các khai báo var không thể ở cùng phạm vi với một khai
//  báo let, const, class, hoặc import.
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared

// Vì các khai báo var không được phạm vi hóa đối với
// các khối, điều này cũng áp dụng cho trường hợp sau:
let a = 1;
{
    var a = 1; // SyntaxError: Identifier 'a' has already been declared
}

// Điều này không áp dụng cho trường hợp sau, trong đó let
//  được đặt trong một phạm vi con của var, không phải cùng
// phạm vi:

var a = 1;
{
    let a = 2;
}
// Một khai báo var trong thân hàm có thể có cùng tên với
// một tham số.

function foo(a) {
    var a = 1;
    console.log(a);
}

foo(2); // Logs 1

// Examples

// Declaring and initializing two variables
var a = 0,
    b = 0;

// Assigning two variables with single string value

var a = 'A';
var b = a;

var a,
    b = (a = 'A');

var x = y,
    y = 'A';
console.log(x, y); // undefined A

// --------------------------------------------------

// Initialization of several variables

// Hãy cẩn thận với cú pháp var x = y = 1 — y thực sự không
// được khai báo như một biến, vì vậy y = 1 là một phép gán
// cho định danh không đủ điều kiện, tạo ra một biến toàn
// cục trong chế độ không nghiêm ngặt.

var x = 0;
function f() {
    var x = (y = 1); // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!

('use strict');

var x = 0;
function f() {
    var x = (y = 1); // ReferenceError: y is not defined
}
f();

console.log(x, y);
