//Phạm bi block scope. Block là một đoạn mã được giới hạn bởi {}

let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 1

// ----------------------------------------------------
// let có thể update nhưng không thể khai báo lại

let greeting = 'say Hi';
greeting = 'say Hello instead';

if (true) {
    let greeting = 'say Hello instead';
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

// ----------------------------------------------------
// Hoisting của let

/**
 * Cũng giống var, khi ta khai báo một biến let thì nó cũng sẽ được đẩy lên đầu.
 * Nhưng lưu ý, không giống var, khi khởi tạo thì var sẽ có giá trị là undefined.
 * let không như vậy, nên nếu bạn cố dùng let trước khi khai báo, bạn sẽ gặp lỗi tham chiếu (Reference Error).
 */
