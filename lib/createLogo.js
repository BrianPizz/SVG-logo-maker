// imports
const { Square, Triangle, Circle } = require("./shapes.js");
const SVG = require("./svg.js");
// Prompt answers are assigned to shape variables
const createLogo = ({ textContent, textColor, shapeChoice, shapeColor }) => {
    const svg = new SVG;
    // new shape is constructed based on user choice
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
    // calls svg render method
    return svg.render()
}

module.exports = createLogo;