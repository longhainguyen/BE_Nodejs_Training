// là hàm
// được truyền qua đối số

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
first();
second();

// gọi hàm first trước nhưng nó lại trả về kết quả sau hàm second.

function first(callback) {
    setTimeout(function () {
        console.log(1);
        callback();
    }, 500);
}

function second() {
    console.log(2);
}

first(second);
