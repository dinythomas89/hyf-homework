const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.fillStyle = this.fillColor;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = 'black';
        context.stroke();
    }
}
function circleInInterval() {
    setInterval(() => {
        const randomX = Math.floor(Math.random() * canvas.width);
        const randomY = Math.floor(Math.random() * canvas.height);
        const radius = Math.floor(Math.random() * 50);
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const c1 = new Circle(randomX, randomY, radius, 0, 2 * Math.PI, color);
        c1.draw();
    }, 100);
}

//circleInInterval();

window.addEventListener('mousemove', event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const radius = Math.floor(Math.random() * 50);
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const c1 = new Circle(mouseX, mouseY, radius, 0, 2 * Math.PI, color);
    c1.draw();
})

