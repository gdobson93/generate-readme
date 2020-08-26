const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  
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
    name: "usage",
    message: "How do I use the application?"
  },

  {
    type: "list",
    name: "license",
    choices: ["MIT, BSD-2-Clause"]
  },

  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this application?"
  },

  {
    type: "input",
    name: "tests",
    message: "How do you run tests? (can default npm tests)"
  },

  {
    type: "input",
    name: "badge",
    message: "What badge link do you want?"
  },

  {
    type: "input",
    name: "username",
    message: "What is your Github username?"
  }, 

  {
    type: "input",
    name: "reponame",
    message: "What is your Github repo link?"
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },

  {
    type: "input",
    name: "questions",
    message: "Do you have any additional questions?"
  }

];
// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answers){

    const api = {
      async getUserInfo (username, reponame) {
        const axios = require("axios")
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=${reponame}+user:${username}`)
        if (data.total_count === 0) {
          return false;
        } else {
          return {
            title: data.items[0].name,
            fullName: data.items[0].full_name,
            username: data.items[0].owner.login,
            avatar: data.items[0].owner.avatar_url,
            link: data.items[0].owner.html_url
          };
        }
      }
    }

    fs.writeFile("README.md", generate(answers), function (err) {
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
