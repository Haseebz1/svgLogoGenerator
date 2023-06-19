const { Triangle, Circle } = require("./shapes");

describe("Triangle", () => {
    test("should render svg logofor a blue polygon element", () => {
      const expectedLogo =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      const triangle = new Triangle();
      triangle.setColor("blue");
      const actualLogo = triangle.render();
      expect(actualLogo).toEqual(expectedLogo);
    });
  });
  

    