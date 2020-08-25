// function to generate markdown for README
function generateMarkdown(data) {
  //create your readme in markdown syntax
  return `
  
  ## ${data.title}

  ## Description

  ${data.description}
  
  # ${data.github}

  ## Table of Contents 

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contribrutions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributions

  ${data.contributions}

  ## Tests 

  ${data.tests}

  ## Questions

  ${data.questions}
`;
}

module.exports = generateMarkdown;
