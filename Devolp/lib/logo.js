class Logo {
    constructor (){
        this.logoText = "";
        this.logoShape = "";    
    }


setText(text, color) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.logoText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  };

  setShape(shape) {
    this.logoShape = shape.render();
  };

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.logoShape}${this.logoText}</svg>`;
  }

}

module.exports = Logo;
