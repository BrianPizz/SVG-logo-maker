const { Square, Triangle, Circle } = require("./shapes.js");
const SVG = require("./svg.js");

const createLogo = ({ textContent, textColor, shapeChoice, shapeColor }) => {
    const svg = new SVG;
    if (shapeChoice === 'Square') {
        shape = new Square();
    } else if (shapeChoice === 'Triangle') {
        shape = new Triangle();
    } else {
        shape = new Circle()
    }
    shape.setColor(shapeColor);
    svg.setText(textContent, textColor);
    svg.setShape(shape);

    return svg.render()
}

module.exports = createLogo;