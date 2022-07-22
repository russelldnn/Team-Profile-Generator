// import Employee from "../lib/Employee";
const Employee = require('../lib/Employee');

test("check name", () => {
    const employee = new Employee ('Russell Dunn', 'russelldnn@gmail.com', '1234');
    expect(employee.getName()).toBe('Russell Dunn');

});

test("check ID", () => {
    const employee = new Employee ('Russell Dunn', 'russelldnn@gmail.com', '1234');
    expect(employee.getId()).toBe('1234');

});

test("check email", () => {
    const employee = new Employee ('Russell Dunn', 'russelldnn@gmail.com', '1234');
    expect(employee.getEmail()).toBe('russelldnn@gmail.com');

});
