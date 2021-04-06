//intialize application, require/instanitiate
//const { prototype } = require('events');
const inquirer = require('inquirer');
const {writefile, copyFile, writeFile} = require('./utils/generate-site.js');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employees = [];



//prompt function
const promptUser = () => {
    //prompt for team manager
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the team managers name!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'What is the team managers id?',
            validate : idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the managers id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the team managers email!');
                }
            }
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the office number');
                    return false;
                }
            }
        }
    ]); 
};

//new user 
const newMember = () => {
    console.log(employees);
    return inquirer.prompt([
        {
            type: 'list',
            message: "Which type of team memeber would you like to add?",
            choices: [
                'Engineer',
                'Intern',
                'I do not wish to add more team members'
            ],
            name: 'addMember'
        }
    ]).then(function ({ addMember }) {
        if (addMember === 'Engineer') {
            return engineerPrompt();
        } else if (addMember === 'Intern') {
            return internPrompt();
        } else {
            return;
        }
    })
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the engineers name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the engineers id:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the engineers email:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineers github username:',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter a github username');
                    return false;
                }
            }
        }
    ])
    .then(function({name, id, email, github}) {
        const engineer = new Engineer(name,id,email,github);
        employees.push(engineer);
        console.log(engineer.getName());
        newMember();
    });
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the interns name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the interns id:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the interns email:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a github username');
                    return false;
                }
            }
        }
    ]).then(function({name,id,email,school}) {
        const intern = new Intern(name,id,email,school);
        employees.push(intern);
        newMember();
    })
};


promptUser()
    .then(function({ name, id, email, officeNumber}) {
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        //new card
        console.log(employees);
    })
    .then(newMember)
    .then(generatePage)
 //   .then(pageHTML => {
  //      return writeFile(pageHTML);
 //   })
 //   .then(writeFileResponse => {
 //       console.log(writeFileResponse);
 //       return copyFile();
 //   })
 //   .then(copyFileResponse => {
 //       console.log(copyFileResponse);
 //   })
    .catch(err => {
        console.log(err);
    });
    