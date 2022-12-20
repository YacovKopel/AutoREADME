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
    
  ])
  .then((response) =>{
  let words=

`# ${response.name}

  ##Description
  ${response.description}
  
  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ![Screenshot of webpage]${response.screenshot}

  ##Deployment Link
  ${response.webpage}
  `

    fs.writeFile('README.md',words , err => {
    if (err) {
      console.error(err);
    }
  })});