const inquirer = require('inquirer');
const createLogo = require('./lib/createLogo.js');

const fs  = require('fs');


const questions = [
    {
        type: "input",
        message: "Enter text (can enter up to three characters):",
        name: "text",
    },
    {
        type: "input",
        message: "Text colour: Enter a color keyword (OR a hexadecimal number)",
        name: "textColour",
    },
    {
        type: "input",
        message: "Shape colour: Enter a color keyword (OR a hexadecimal number)",
        name: "shapeColour",
    },
    {
        type: "list",
        message: "Choose a shape",
        choices: ['circle', 'triangle', 'square'],
        name: "shape",
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Successfully created file.");
        }
    })
}

function init() {
    inquirer.prompt(questions).then(function(data) {
        if (data.text.length >= 3) {
            writeToFile("logo.svg", createLogo(data));
        }
        else {
            console.log("Description must be more than three characters")
            return;
        }
    })
}

init();