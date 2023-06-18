class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}
