//  khai báo các biến cục bộ có thể gán lại, phạm vi
// trong khối, tùy chọn khởi tạo mỗi biến với một giá trị.
let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // Expected output: 2
}

console.log(x);
// Expected output: 1

//--------------------------------------------------------

// So với var, các khai báo let có các khác biệt sau:

// - Các khai báo let có phạm vi trong các khối cũng như
// các hàm.
// - Các khai báo let chỉ có thể truy cập sau khi nơi khai báo
//  được đạt đến. Vì lí do này, các khai báo let thường được
//  coi là non-hoisted.
//-  Các khai báo let không tạo ra các thuộc tính trên
// globalThis khi được khai báo ở cấp độ trên cùng của một
// script.
// - Các khai báo let không thể được khai báo lại bởi bất
//  kỳ khai báo nào khác trong cùng phạm vi.
// - let bắt đầu các khai báo, không phải là các câu lệnh.
//  Điều này có nghĩa là bạn không thể sử dụng một khai báo
// - let  declaration as the body of a block
// if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
