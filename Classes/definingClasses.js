// Classes are in fact "special functions"
// Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Body của class trong dấu {}, nó được thực thi trong 'strict mode' khi không có từ khóa 'use strict'.

// Thành phần của lớp:
// - Getter, setter, method, or field
// -  Static or instance
// - Public or private
