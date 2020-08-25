const inquirer = require("inquirer");
const fs = require("fs");
const api = require("axios");
const generate = require(".utils/generateMarkdown");

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
  },

  {
    type: "input",
    name: "title",
    message: "What is the name of your file?"
  },

  {
    type: "input",
    name: "description",
    message: "What is the description of your application?"
  },

  {
    type: "input",
    name: "installation",
    message: "What npm modules must be installed? (can default w / npm higher install)"
  },

  {
    type: "input",
    name: "test",
    message: "How do you run tests? (can default npm tests)"
  },

  {
    type: "input",
    name: "usage",
    message: "How do I use the application?"
  },

  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this application?"
  }

  /*{
    type: "list",
    name: "license",
    message: "MIT, BSD-2-Clause"
  }*/

];

// function to write README file
function writeToFile(fileName, data) {
  //return write file here (look in fs docs, look into path)
  fs.writeToFile(fileName + ".md", data, error => error ? console.log(error) : console.log(`${fileName + ".md"} generated successfully!`))
};

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers){
    console.log(answers);

    fs.writeToFile("README.md", generate(answers), function (err) {
      if(err) {
        throw err;
      }

      console.log("New README file created successfully!");
    });


    // call your write file function
    //file name = "README.md"
    //require in generate markdown js and pass in inquirer data to write the readme
    //look into the spread operator "{...answers}"
  });
}

// function call to initialize program
init();
