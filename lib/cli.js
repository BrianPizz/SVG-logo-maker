const inquirer = require('inquirer');

class CLI{
    constructor(){}

    run(){
        inquirer.prompt([
        {
            name: 'text',
            message: 'Enter your logo text:',
        },
        {
            name: 'textColor',
            message: 'Enter your text color:',
        },
        {
            name: 'shape',
            message: 'Pick a shape:',
            type: 'list',
            choices: ['Circle','Square','Triangle']
        },
        {
            name: 'shapeColor',
            message: 'Enter your shape color:',
        },
    ])
}
}

module.exports = CLI;