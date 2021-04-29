console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        console.log(this.radius * 2);
    }
    getCircumference() {
        console.log(2 * 3.14 * this.radius);
    }
    getArea() {
        console.log(3.14 * this.radius * this.radius);
    }
}

const circle = new Circle(10);
circle.getDiameter();