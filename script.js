// Defining the Rectangle class
class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive integers.");
        }
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

// Defining the Square class that inherits from Rectangle
class Square extends Rectangle {
    constructor(side) {
        if (side <= 0) {
            throw new Error("Side length must be a positive integer.");
        }
        super(side, side); // Calling the parent class constructor with width and height set to side
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

// Making classes available in Cypress tests (browser global scope)
window.Rectangle = Rectangle;
window.Square = Square;
