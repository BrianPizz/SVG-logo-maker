const inquirer = require('inquirer');
const questions = require('./questions.js');
const { writeFile } = require('fs/promises');
const createLogo = require('./createLogo.js')

class CLI {
    constructor() { }

    run() {
        inquirer.prompt(questions)
            .then(({textContent, textColor, shapeChoice, shapeColor}) => {
                return writeFile('test.svg',createLogo({textContent, textColor, shapeChoice, shapeColor}) )
            })
            
    }
}



module.exports = CLI;