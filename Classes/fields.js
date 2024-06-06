// Private properties
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    getWidth() {
        return this.#width;
    }

    getHeight() {
        return this.#height;
    }

    setWidth(_width) {
        this.#width = _width;
    }

    setHeight(_height) {
        this.#height = _height;
    }
}

// public properties

class Rectangle2 {
    height = 0;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rectangle = new Rectangle(5, 5);
console.log(rectangle.width); // undefined
console.log(rectangle.getWidth()); // 5

const rectangle2 = new Rectangle2(5, 5);
console.log(rectangle2.height); // 5

export { Rectangle };
