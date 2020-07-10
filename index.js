const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    "What is your Github username?", 
    "What is your email address?",
    "What is the title of your project?", 
    "Give a short description of the project.",
    "What are the instructions for installation?", 
    "What is your project's intended usage?", 
    "What type of licensing would you like?", 
    "How can others contribute?"
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
};

// function to initialize program
function init() {
    inquirer.prompt([
 {
    type: "input",
    message: questions[0],
    name: "Username"
 },
 {
    type: "input",
    message: questions[1],
    name: "Email"
 },
 {
    type: "input",
    message: questions[2],
    name: "Title"
 },
 {
    type: "input",
    message: questions[3],
    name: "Description"
 },
 {
    type: "input",
    message: questions[4],
    name: "Installation"
 },
 {
    type: "input",
    message: questions[5],
    name: "Usage"
 },
 {
    type: "input",
    message: questions[6],
    name: "Licensing"
 },
 {
    type: "input",
    message: questions[7],
    name: "Contributing"
 }

    ]).then((answers) => {
        console.log("readme generated.");
        writeToFile("README.md",generateMarkdown({...answers}));
        
        console.log(answers)
    })

};

// function call to initialize program
init();




// async function init() {
//     const data = await inquirer.prompt(questions)
//     const newFile = generateHTML(data);
//     writeFileAsync("Profile.html", newFile);
// }
// init()
// inquirer.prompt(questions)
//     .then((data) => {
//         const newFile = generateHTML(data);
//         writeFileAsync("README.md", newFile);
//     })
