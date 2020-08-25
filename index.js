const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  }, 

  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers){
    console.log(answers);
  });
}

// function call to initialize program
init();
