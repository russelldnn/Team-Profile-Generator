//requirement needed to extend from (all workers are employees)
const Employee = require("./Employee");
//extended class
class Intern extends Employee {
    constructor (name, email, id, school) {
        //calling super to pass back in name/email/id so I can use this
        super(name, email, id);
        this.role = "Intern";
        this.school = school;

    }

    getSchool(){
        return this.school;
    }
}

//exporting class for use in index
module.exports = Intern;