// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer =require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Input the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project here:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions here:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information here:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'List contribution guidlines here:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the test instructions here:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter GitHub username here:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address here:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project',
        choices: ['MIT', 'Apache 2.0', 'None']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('Your README.md files has successfully generated!');
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
