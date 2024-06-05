// JavaScript is a dynamic language with dynamic types.
// JavaScript không được liên kết trực tiếp với bất kỳ loại giá trị cụ thể nào
// và bất kỳ biến nào cũng có thể được gán (và gán lại)

let foo1 = 42; // foo is now a number
foo1 = 'bar'; // foo is now a string
foo1 = true; // foo is now a boolean

// ---------------------------------------------------
// JavaScript is also a weakly typed language

const foo2 = 42; // foo is a number
const result = foo2 + '1'; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421

// Type	typeof return value	Object wrapper
// Null	"object"	N/A
// Undefined	"undefined"	N/A
// Boolean	"boolean"	Boolean
// Number	"number"	Number
// BigInt	"bigint"	BigInt
// String	"string"	String
// Symbol	"symbol"

// Symbol : Đối với kiểu dữ liệu symbol, thì mỗi giá trị là độc nhất trong một chương trình, có nghĩa là,
//  không thể tồn tại hai giá trị symbol bằng nhau, ngoại trừ trường hợp ta dùng phép gán.

// -----------------------------------------------------

// Kiểu tham trị
let a = 1;
let b = a;
a = 2;
console.log(b);

// Kiểu tham chiếu
let c = {
    age: 11,
};

let d = c;

c.age = 10;

console.log(d.age);
