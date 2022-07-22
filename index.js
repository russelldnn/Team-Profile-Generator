//requirements needed for index
const generateHTML = require("./src/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
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

];
//inquirers on the prompts then pushes the array to the employee array
const createManager = () => {
    return inquirer.prompt(managerInput)
    .then((input) => {
        const manager = new Manager(input.name, input.email, input.id, input.officeNumber);
        employeeArr.push(manager);
    })
};

//employee based questions using both a list question and when identifiers
let employeeInput = [
    {
        type: 'list',
        name: 'job',
        message: 'What is your employees Job?',
        choices: ['Engineer', 'Intern']
    },

    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their employee email?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee ID assigned to them'

    },
   
    
    {
        type: 'input',
        name: 'github',
        when: (input) => input.job === "Engineer",
        message: 'What is the employees github username?'
    },
    {
        type: 'input',
        name: 'school',
        when: (input) => input.job === "Intern",
        message: "What school do they attend?"
    },
    {
        type: 'confirm',
        name: 'repeat',
        message: "add another employee?"
    }
];
//function to create an employee using an if else statement to sort between engineers and interns
const createEmployee = () => {
    return inquirer.prompt(employeeInput)
    .then (input => {
        let { job, name, email, id, school, github, repeat} = input;
        let employee;

        if (job === "Intern") {
            employee = new Intern (name, id, email, school);
        } else if (job === "Engineer") {
            employee = new Engineer (name, id, email, github);
        }

        employeeArr.push(employee);
        //simple if statement using cofirms boolean return to cycle the above function
        if (repeat == true) {
            return createEmployee(employeeArr);
        } else {
            return employeeArr;
        }
    })
};
//writeFile function using fs to create an html
const writeHTML = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err)
            {console.log(err); return;}
        else{
            console.log ("html has been generated")
            }
    })
};
//got help with this last bit
//calls all the functions in turn to gather inquirer data then calls the write funtion to create the html
createManager()
.then(createEmployee)
.then(employeeArr =>{
    
    let genFun = generateHTML(employeeArr);
    
    return genFun;
})
.then(teamHTML =>{
    
    return writeHTML(teamHTML);
});

// .catch(err => {
//     console.log("error in the last block");
//     console.log(err);
// });

