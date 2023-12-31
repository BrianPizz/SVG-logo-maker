// Parent shape class
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color
    }
}
// Child shape classes with unique render tag
class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill=\"${this.color}\" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill=\"${this.color}\" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=\"${this.color}\" />`;
    }
}
// children classes exported
module.exports = {
    Circle,
    Square,
    Triangle
};