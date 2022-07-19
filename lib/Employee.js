//Employee class everyone is an employee
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        //hard coded role returns employee
        this.role = "Employee"
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }
}
//exports class for use in contructors outside this JS
module.exports=Employee;