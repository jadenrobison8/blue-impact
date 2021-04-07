const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function htmlCards(member) {
    return `
        ${member
            .filter(({ github }) => github)
            .map(({name, id, email, github}) => {
                return `
                <!-- Engineer Employee Card -->
                <div class="col d-sm-flex justify-content-center">
                    <div class="card employee-card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">${name}</h2>
                            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        })
        .join('')}

        ${member
            .filter(({school}) => school)
            .map(({name,id,email,school}) => {
                return `
                <!-- Intern Employee Card -->          
                <div class="col d-sm-flex justify-content-center">
                    <div class="card employee-card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">${name}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>              
            `;
        })
        .join('')} 

        ${member
            .filter(({ officeNumber }) => officeNumber)
            .map(({ name, id, email, officeNumber}) => {
                return `
                <!-- Manager Employee Card -->
                <div class="col d-sm-flex justify-content-center">
                    <div class="card employee-card mt-4">
                        <div class="card-header">
                            <h2 class="card-title">${name}</h2>
                            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">Office Number: ${officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>    
            `;
            })
            .join('')}
            ${console.log('team added!')}
    `;
}

module.exports = employees => { 
    //destructure projects and about data from templateData based on their property key names
    const { Manager, Engineer, Intern } = employees;
    //console.log(projects, header, about);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
                </nav>
            </div>
        </header>

        <main class="container my-5">
            ${console.log(employees)}
            ${htmlCards(employees)}

        </main>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by jaden</h3>
        </footer>

    </body>
    </html>
    `;
};
