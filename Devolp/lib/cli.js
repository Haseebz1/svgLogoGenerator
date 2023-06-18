const inquirer = require('inquirer');
const {WriteFile} = require('fs/promises');
const Logo = require("./logo");
const { Circle, Triangle, Square } = require("./shapes");

let userQuestions = [
    {
      name: "text",
      type: "input",
      message:
        "Enter text for the logo. (Must not be more than 3 characters.)",
      validate: (text) =>
        text.length <= 3 ||
        "The message must not contain more than 3 characters",
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
