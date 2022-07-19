//requirements needed for index
let generateHTML = 0;
let inquirer = require("inquirer");
let fs = require("fs");
let Employee = require("./lib/Employee");
let Manager = require("./lib/Manager");
let Intern = require("./lib/Intern");
let Engineer = require("./lib/Engineer");
//employee array for later
const employeeArr =[];

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
//inquirers on the prompts then pushes the array to the employee array
const createManager = () => {
    return inquirer.prompt(managerInput)
    .then((input) => {
        const manager = new Manager(input.name, input.email, input.id, input.officeNumber);
        employeeArr.push(manager);
    })
}