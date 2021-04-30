console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        const diameter = this.radius * 2;
        console.log(diameter);
        return diameter;
    }
    getCircumference() {
        console.log(3.14 * this.getDiameter());
    }
    getArea() {
        console.log(3.14 * this.radius * this.radius);
    }
}

const circle = new Circle(20);
circle.getDiameter();
circle.getDiameter();
circle.getArea();