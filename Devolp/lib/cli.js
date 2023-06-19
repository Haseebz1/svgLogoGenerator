const inquirer = require("inquirer");
const { WriteFile } = require("fs/promises");
const Logo = require("./logo");
const { Circle, Triangle, Square } = require("./shapes");

let userQuestions = [
  {
    name: "text",
    type: "input",
    message: "Enter text for the logo. (Must not be more than 3 characters.)",
    validate: (text) =>
      text.length <= 3 || "The message must not contain more than 3 characters",
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter a text color",
  },
  {
    name: "shapeType",
    type: "list",
    message: "Select a shape for the logo",
    choices: ["circle", "square", "triangle"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Enter a shape color",
  },
];

class CLI {
  do() {
    return inquirer
      .prompt(userQuestions)
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let chosenShape;
        switch (shapeType) {
          case "circle":
            chosenShape = new Circle();
            break;

          case "square":
            chosenShape = new Square();
            break;

          default:
            chosenShape = new Triangle();
            break;
        }
        chosenShape.setColor(shapeColor);

        const logo = new Logo();
        logo.setText(text, textColor);
        logo.setShape(chosenShape);
        return writeFile("userLogo.svg", logo.render());
      })
      .then(() => {
        console.log("Generated userLogo.svg");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = CLI;
