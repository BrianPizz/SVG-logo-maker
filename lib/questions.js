const questions = [
    {
        name: 'textContent',
        message: 'Enter your logo text:',
    },
    {
        name: 'textColor',
        message: 'Enter your text color:',
    },
    {
        name: 'shapeChoice',
        message: 'Pick a shape:',
        type: 'list',
        choices: ['Circle','Square','Triangle']
    },
    {
        name: 'shapeColor',
        message: 'Enter your shape color:',
    },
]

module.exports = questions;