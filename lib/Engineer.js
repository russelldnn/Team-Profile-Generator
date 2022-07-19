//requirement needed to extend from (all workers are employees)
const Employee = require("./Employee");
//extended class
class Engineer extends Employee {
    constructor (name, email, id, github) {
        //calling super to pass back in name/email/id so I can use this
        super(name, email, id);
        this.role = "Engineer";
        this.github = github;

    }

    getGithub(){
        return this.github;
    }
}

//exporting class for use in index
module.exports = Engineer;