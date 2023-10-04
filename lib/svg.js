class SVG {
    constructor() {}
    setText(text, color) {
      this.text = text;
      this.color = color;
      
      if(text.length > 3){
        throw new Error("Text must not exceed 3 characters.");
      }
    }
    setShape(shape) {
      this.shape = shape;
    }  
    render() {
      let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
      if (this.shape) {
        svg += this.shape.render();
      }
      if (this.text && this.color) {
        svg += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
      }
      svg += `</svg>`;
      return svg;
    }
  }
  
  module.exports = SVG;