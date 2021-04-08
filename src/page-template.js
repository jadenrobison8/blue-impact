const { data } = require("browserslist");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function managerCard(member) {

    return `
    <!-- Manager Employee Card -->
    <div class="col d-sm-flex justify-content-center">
        <div class="card employee-card mt-4">
            <div class="card-header">
                <h2 class="card-title">${member.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">Office Number: ${member.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>    
`;
                    

}

function engineerCard(member) {

    return `
    <!-- Engineer Employee Card -->
    <div class="col d-sm-flex justify-content-center">
        <div class="card employee-card mt-4">
            <div class="card-header">
                <h2 class="card-title">${member.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${member.github}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${member.id}" target="_blank">${member.id}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `; 
}

function internCard(member) {

    return `
    <!-- Intern Employee Card -->          
    <div class="col d-sm-flex justify-content-center">
        <div class="card employee-card mt-4">
            <div class="card-header">
                <h2 class="card-title">${member.name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">School: ${member.school}</li>
                </ul>
            </div>
        </div>
    </div>              
    `;
}

function htmlCards(members) {
    console.log(members);
    let data = '';
    for(i = 0; i < members.length; i++) {    
        if (members[i].getRole() === 'Manager') {
            console.log(members[i].getRole());
            data += managerCard(members[i]);
        } else if (members[i].getRole() === 'Intern') {
            data += internCard(members[i]);
        } else if (members[i].getRole() === 'Engineer') {
            data += engineerCard(members[i]);
        };
        console.log(members[i]);
    };
    return data;
}

module.exports = employees => { 

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--stylesheets-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profiles</title>
    </head>  
    <body>
        
        <section class="jumbotron jumbotron-fluid bg-info text-white text-center">
            <div class="container">
                <h1 class="display-3">My Team</h1>
            </div>
        </section>
        <!-- Main Employee Card Section-->
        <main class="container">
            <div class="row">
            ${htmlCards(employees)}
            </div>
        </main>  
                 
        <!-- Bootstrap jQuery, Popper.js, and Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
        <script src="https://kit.fontawesome.com/1ac5a0514e.js"></script>
        </body>
    </html>
    `;
};
