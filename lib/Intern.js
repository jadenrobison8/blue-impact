const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school; 
    }

    getSchool() {
        return this.school;
    }

    getRole() { //overridden to intern
        return 'Intern';
    }
};

module.exports = Intern;
