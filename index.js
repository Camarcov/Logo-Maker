const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

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

function selectShape(shape,color) {
    switch (shape) {
        case 'Triangle':
            const triangle = new Triangle(color)
            return triangle.render();
            break
        case 'Square':
            const square = new Square(color)
            return square.render();
            break
        case 'Circle':
            const circle = new Circle(color)
            return circle.render();
            break
    }
}

function generateSVG({ logoText, textColor, logoShape, shapeColor }) {
    return ` <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${selectShape(logoShape, shapeColor)}
    <text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="25">${logoText}</text>
    </svg>`;
};

//function to validate text length, if returns true throws error, if false passes.
function validateText(text) {
    if (text.length != 3) {
        throw new Error('Please enter only 3 characters.');
    }
};

//function to write to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Created logo.svg')
    })
}

//starts the app
function init() {
    inquirer.prompt(questions).then((data) => {
        validateText(data.logoText)
        writeToFile(`./examples/${data.logoText}-logo.svg`, generateSVG(data))
    })
}

init();

module.exports = validateText