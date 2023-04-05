const inquirer = require('inquirer');
const generateLogo = require ('./lib/generateLogo.js'); 

const fs  = require('fs');


const questions = [
    {
        type: "input",
        message: "Enter text",
        name: "text",
    },
    {
        type: "input",
        message: "Text colour",
        name: "textColour",
    },
    {
        type: "input",
        message: "Enter shape colour",
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
            writeToFile("logo.svg", generateLogo(data));
        }
        else {
            console.log("Description must be more than three characters")
            return;
        }
    })
}

init();