const person1 = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

const person2 = {
    firstName: 'John',
    lastName: 'Doe',
};

// call là bind xong gọi luôn hàm
// Return "John Doe":
console.log(person1.fullName.call(person2));
