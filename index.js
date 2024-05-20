const inquirer = require('inquirer');
const { writeToFile, validateText, generateSVG, selectShape } = require('./SVG.js')

//inquirer prompt for user input
const questions = [{
    type: 'list',
    message: 'Choose a shape for your logo',
    choices: ['Triangle', 'Square', 'Circle'],
    name: 'logoShape'
},
{
    message: 'Choose a color for your shape, color name or hex code.',
    name: 'shapeColor'
},
{
    message: 'Choose three characters for your logo',
    name: 'logoText'
},
{
    message: 'Choose a color for your text, color name or hex code.',
    name: 'textColor'
}]

//starts the app
function init() {
    inquirer.prompt(questions).then((data) => {
        validateText(data.logoText)
        writeToFile(`./examples/${data.logoText}-logo.svg`, generateSVG(data))
    })
}

init();