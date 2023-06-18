class Logo {
    constructor (){
        this.logoText = "";
        this.logoShape = "";    
    }
}

setText(text, color) {
    if (text.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.logoText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    this.logoShape = shape.render();
  }
