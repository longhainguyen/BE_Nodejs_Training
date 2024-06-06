this.name = 'thu';

const teacher = {
    name: 'Minh',
    getName() {
        return this.name;
    },
};

console.log(teacher.getName());
const getName2 = teacher.getName;
console.log(getName2());
