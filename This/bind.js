const teacher = {
    name: 'Minh',
    getName() {
        return this.name;
    },

    getAge(age) {
        return `${this.name} age ${age}`;
    },
};

const student = {
    name: 'Lan',
};

// Phuơng thức bind sẽ tạo 1 hàm mới, nhận đối số như hàm ban đầu

const getNameBind = teacher.getName.bind(student);
console.log(getNameBind());

const getAgeBind = teacher.getAge.bind(student);
console.log(getAgeBind(12));
