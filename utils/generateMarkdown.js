// function to generate markdown for README
function generateMarkdown(data) {
  //create your readme in markdown syntax
  return `# ${data.title}
          # ${data.github}

## Table of Contents 
* [Installation](#installation)
`;
}

module.exports = generateMarkdown;
