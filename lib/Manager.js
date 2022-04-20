//imports employee
const Employee = require('../lib/Employee.js');


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }


    getRole () {
        return "Manager";
    }
}

// this exports to Manager 
module.exports = Manager; 