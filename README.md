# svg-generator

## Project Description

The scope of the project is to create a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## User Story

- AS a freelance web developer
- I WANT to generate a simple logo for my projects
- SO THAT I don't have to pay a graphic designer


## Acceptance Criteria

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named `logo.svg`
- AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the `logo.svg` file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Languages Used

- Javascript/Node.js

## How to use

To use the application the essential packages must be installed such as inquirer and fs. To run tests on the application the package jest must be installed. The application is run using the terminal by typing 'node index' into the terminal. A series of prompts will then be displayed to the user that asks how the svg logo is to be generated. After all prompts have been fulfilled the svg logo will be generated in the root folder. To run a test on the application 'npm test' is inputted into the terminal and a test will be performed.


## Application
[https://drive.google.com/drive/folders/1VFTvprxvJU_8KVz-WNh8FZ7V5sYk7uBo?usp=sharing] - Link to application demo video and generated sample logo.

APP
![image](https://user-images.githubusercontent.com/56829664/230481590-b0040f33-1aa7-4e1e-ab91-b89f54df1185.png)

TEST
![image](https://user-images.githubusercontent.com/56829664/230481679-63bf2b88-90ef-41b1-bb52-42570c52cb80.png)


