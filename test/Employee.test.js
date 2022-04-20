const Employee = require('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Melissa', 31, 'melissa.mor0811@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get their name
test('gets employee name', () => {
    const employee = new Employee('Melissa', 31, 'melissa.mor0811@gmail.com@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get their ID's
test('gets employee ID', () => {
    const employee = new Employee('Melissa', 31, 'melissa.mor0811@gmail.com@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get their email
test('gets employee email', () => {
    const employee = new Employee('Melissa', 31, 'melissa.mor0811@gmail.com@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//get their role
test('gets role of employee', () => {
    const employee = new Employee('Melissa', 31, 'melissa.mor0811@gmail.com@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 