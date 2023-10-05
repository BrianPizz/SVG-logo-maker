const questions = [
    {
        name: 'textContent',
        message: 'Enter your logo text(up to 3 characters):',
    },
    {
        name: 'textColor',
        message: 'Enter your text color(keyword OR hexadecimal number):',
    },
    {
        name: 'shapeChoice',
        message: 'Pick a shape:',
        type: 'list',
        choices: ['Circle','Square','Triangle']
    },
    {
        name: 'shapeColor',
        message: 'Enter your shape color(keyword OR hexadecimal number):',
    },
]
// array exported to CLI
module.exports = questions;