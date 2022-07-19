//requirement needed to extend from (all workers are employees)
const Employee = require("./Employee");
//extended class
class Manager extends Employee {
    constructor (name, email, id, officeNumber) {
        //calling super to pass back in name/email/id so I can use this
        super(name, email, id);
        this.role = "Manager";
        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

//exporting class for use in index
module.exports = Manager;