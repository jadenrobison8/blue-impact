const Employee = require('./Employee');

class Engineer extends Employee {
    
    constructor(name, github, email, id) {
        super(name, id, email);

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {//overridden to engineer\

        return "Engineer";
    }
};

module.exports = Engineer;