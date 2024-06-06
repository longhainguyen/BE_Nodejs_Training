const hello = () => {
    return 'Hello World!';
};

// nếu hàm chỉ có 1 câu lệnh và câu lệnh trả về giá trị, ta có thể bỏ return

const hello2 = () => 'Hello World!'; //Note: This works only if the function has only one statement.

// Arrow function với tham số
const hello3 = (val) => 'Hello ' + val;
