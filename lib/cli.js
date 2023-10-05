// imports
const inquirer = require('inquirer');
const questions = require('./questions.js');
const { writeFile } = require('fs/promises');
const createLogo = require('./createLogo.js')
// CLI class method calls inquirer prompts
class CLI {
    constructor() { }
    run() {
        inquirer.prompt(questions)
            .then(({ textContent, textColor, shapeChoice, shapeColor }) => {
                console.log('Generated logo.svg! Check dist folder')
                // inquirer answers are passed as variables to createLogo functions
                // return value of createLogo is printed to 'logo.svg' in dist folder
                return writeFile('./dist/logo.svg', createLogo({ textContent, textColor, shapeChoice, shapeColor }))
            })
    }
}

module.exports = CLI;