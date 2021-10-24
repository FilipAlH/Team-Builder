const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, Office) {
        super(name, id, email);
        this.Office = Office

    }

    getRole() {
        return this.constructor.name
    }
}

module.exports = Manager