// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide the contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompt the user with questions
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate README content
            const readmeContent = generateMarkdown(answers);
            // Write README file
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error occurred while prompting user:', error);
        });
}

// Function call to initialize app
init();
