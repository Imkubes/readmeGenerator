const inquirer = require('inquirer');
const fs = require('fs');


const generateReadMe = ({yourname, title, description, installation, test, usage, license, questions, github, email, contributors,}) =>
  `  
  ![License](https://img.shields.io/badge/license-${license}-green)
  
  # ${yourname}
  # ${title}

  # Table of Contents
  _____________________
  [Description](#desc)
  [Installation](#inst)
  [Testing](#testing)
  [Usage](#usage)
  [Licensing](#lics)
  [Questions?](#ques)
  [Github](#git)
  [Email](#email)
  [Contributors](#contr)

  ______________________
  <a name="desc"</a>
  ## Description
  ______________________
  
  ${description}

  <a name="inst"</a>
  ## Installation
  ______________________
  
  ${installation}

  <a name="testing"</a>
  ## Testing
  ______________________

  ${test}

  <a name="usage"</a>
  ## Usage
  ______________________

  ${usage}

  <a name="lics"</a>
  ## License
  ______________________

  ${license}

  <a name="git"</a>
  ## Github Username
  _______________________

  ${github}

  <a name="email"</a>
  ## Email To Contact
  _______________________

  ${email}

  <a name="ques"</a>
  ## Have Questions?
  _______________________

  ${questions}
  
  <a name="contr"</a>
  ## Contributors
  _______________________
  
  ${contributors}`;

inquirer
  .prompt([
      {
          type: 'input',
          name: 'yourname',
          message: 'What is your name?',
      },
      {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
      },
      {
          type: 'input',
          name: 'description',
          message: 'Describe your project...',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do I install this project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the app...',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?',
      },
      {
          type: 'input',
          name: 'test',
          message: 'How do you test the app?',
      },
      {
          type: 'list',
          name: 'license',
          message: 'Which license did you use?',
          choices: [ 'MIT', 'GNU 2.0', 'Apache', 'GNU 3.0' ],
      },
      {
          type: 'input',
          name: 'questions',
          message: 'How would you like people to ask you questions about your app?',
      },
      {
          type: 'input',
          name: 'github',
          message: 'What is your github username?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'What email would you like people to see?',
      },
  ])
  .then((answers) => {
      const readMeContent = generateReadMe(answers);

      fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
      );
  });