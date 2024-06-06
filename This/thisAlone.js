//  event
const button = document.getElementById('button1');

button.onclick = function () {
    console.log(this);
};

//  alone
function myfunc() {
    console.log(this);
}

myfunc();
