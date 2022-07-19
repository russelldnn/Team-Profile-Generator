//requirements needed for index
let generateHTML = 0;
let inquirer = require("inquirer");
let fs = require("fs");
let Employee = require("./lib/Employee");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let Engineer = require("./lib/Engineer");

//An array of questions for the manager in a format inquirer can use
let managerInput = [
    {
        type:"input",
        name:"name",
        message:"Enter the managers name."
    },
    {
        type:"input",
        name:"email",
        message:"enter the managers email."
    },
    {
        type:"input",
        name:"id",
        message:"enter the managers ID with no spaces"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"enter the managers office number in the format XXX-XXX-XXXX"
    },
    
]