const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your Repo?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Add a Description of your webpage?',
      name: 'description',
      
    },
    {
      type: 'input',
      message: 'Add any Installation instructions.\nIf there is no installation instructions, type "N/A"',
      name: 'installation',
    },
    {
    type: 'input',
    message: 'For Usage, Describe how the app functions?',
    name: 'usage',   
    },
    {
    type: 'input',
    message: 'Enter the link to the screenshot image.\n ![Screenshot of webpage] ',
    name: 'screenshot',
    
    },
    {
    type: 'input',
    message: 'Enter the deployment link to your webpage',
    name: 'webpage',
    
    },
    {
    type: 'list',
    message: 'Enter the license link.\nIf there is no license, type "N/A"',
    name: 'license',
    choices: ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
            '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)']
    
    },
    {
    type: 'input',
    message: 'Enter any collaborators, if any, with links to their GitHub profiles. link.\nIf there is no collaborators, type "N/A"',
    name: 'credit',
    
    },
    {
    type: 'input',
    message: 'Add your email so users can reach out if they have questions',
    name: 'email',
    
    },
    {
    type: 'input',
    message: 'Add your Github link so users can reach out if they have questions',
    name: 'github',
    
    },
    
  ])
  .then((response) =>{
  let words=

`# ${response.name}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  
## Installation
${response.installation}

## Usage
${response.usage}

![Screenshot of webpage]${response.screenshot}

## Credits
${response.credit}

## Deployment Link
${response.webpage}

## License
${response.license}

## Questions
${response.email}
${response.github}



`

    fs.writeFile('README.md',words , err => {
    if (err) {
      console.error(err);
    }
  })});