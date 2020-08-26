function generateMarkdown(data) {
  return `
  
  ## ${data.title}

  ## Description

  ${data.description}
  
  # ${data.username}

  ## Table of Contents 

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contribrutions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [Badge](#Badge)
  

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

  ## Badge

  ${data.badge}

`;
}

module.exports = generateMarkdown;
