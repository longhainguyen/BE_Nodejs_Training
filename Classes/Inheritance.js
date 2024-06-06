// import { Rectangle } from './fields.js';

class Animal {
    #name;
    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(_name) {
        this.#name = _name;
    }

    speak() {
        console.log(`${this.#name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.getName()} barks.`);
    }
}

// const dog = new Dog('Alaskan');
// const dog2 = dog;
// d.speak(); // Alaskan barks.
// dog2.setName('CHihuahua');
// dog.speak(); // CHihuahua barks
// dog2.speak(); // CHihuahua barks

// console.log(dog === dog2); // true

// const dog3 = new Dog('CHihuahua');
// console.log(dog3 === dog2); // false
// console.log(dog3.getName() === dog2.getName()); // true
// console.log(dog instanceof Animal); // true
// console.log(dog instanceof Dog); // true

/**
 * toán tử == dùng để kiểm tra xem 2 phần tử được kiểm tra đó có bằng nhau không,
 *  nhưng nó chỉ xét về giá trị mà không quan tâm đến kiểu dữ liệu của 2 phần tử đó
 * 10 = '10' // true
 * === thì "nghiêm ngặt" hơn ngoài so sánh giá trị n còn quan tâm đến cả kiểu dữ liệu
 * của các phần tử được so sánh
 * 10 === '10' // false
 */

class Cat extends Animal {
    #catchMouse;
    constructor(catchMouse, name) {
        super(name);
        this.#catchMouse = catchMouse;
    }

    catchTheMouse() {
        console.log(`${this.getName()} cat ${this.#catchMouse}`);
    }

    speak() {
        console.log(`${this.getName()} meo meo`);
    }

    static eat() {
        console.log('ear mouse');
    }
}

const cat = new Cat('catch the mouse', 'mi mi');
cat.catchTheMouse();
Cat.eat();
console.log(cat instanceof Dog);
