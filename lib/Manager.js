const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, office_number) {
        super(name, id, email);
        this.office_number = office_number

    }

    getRole() {
        return this.constructor.name
    }
}

module.exports = Manager