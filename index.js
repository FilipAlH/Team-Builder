const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let Engineers = new Array
let EngineersObject = new Employee
let Interns = new Array
let InternsObject = new Employee
let manager
let arrayOfCards = new Array

function generateEngineers() {
    for(i = 0; i < Engineers.length; i++){
        EngineersObject[i] = new Engineer(Engineers[i].engineer, Engineers[i].engineerId, Engineers[i].engineerEmail, Engineers[i].engineerGithub)
        EngineersObject[i].createCard()
        EngineersObject[i].createCardLastLi()
    };  
}

function generateInterns() {
    for(i = 0; i < Interns.length; i++){
        InternsObject[i] = new Intern(Interns[i].intern, Interns[i].internId, Interns[i].internEmail, Interns[i].internSchool)
        InternsObject[i].createCard()
        InternsObject[i].createCardLastLi()
    };  
}

function inquire() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'menu',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team'],
        },
    ])
        .then((response) => continualQuestioning(response.menu))      
}

Employee.prototype.createCard = function() {
    arrayOfCards.push(
     `
    <div class="card m-4" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${this.getName()}</h5>
        <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${this.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
    `);
}

Employee.prototype.createCardLastLi = function() {
    if(this.getRole() === 'Manager') {
        arrayOfCards.push(
        `
            <li class="list-group-item">Office number: ${this[Object.keys(this)[3]]}</li>
            </ul>
        </div>
        `);
    } else if(this.getRole() === 'Engineer') {
        arrayOfCards.push(
        `
            <li class="list-group-item">Github: <a href="https://github.com/${this[Object.keys(this)[3]]}" target="_blank">${this[Object.keys(this)[3]]}</a></li>
            </ul>
        </div>
        `);
    } else {
        arrayOfCards.push(
        `
            <li class="list-group-item">School: ${this[Object.keys(this)[3]]}</li>
            </ul>
        </div>
        `);
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your manager?',
            name: 'manager',
        },

        {
            type: 'number',
            message: "What is the your manager's id?",
            name: 'managerId',
        },

        {
            type: 'input',
            message: "What is the your manager's email?",
            name: 'managerEmail',
        },

        {
            type: 'number',
            message: "What is the your manager's office number?",
            name: 'managerOffice',
        },
])
    .then((response) => {
        manager = new Manager(response.manager, response.managerId, response.managerEmail, response.managerOffice)
        inquire()
})    


function continualQuestioning(responseContinued) {
    if (responseContinued == 'Add an Engineer') {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of your engineer?',
                name: 'engineer',
            },

            {
                type: 'number',
                message: "What is the your engineer's id?",
                name: 'engineerId',
            },

            {
                type: 'input',
                message: "What is the your engineer's email?",
                name: 'engineerEmail',
            },

            {
                type: 'input',
                message: "What is the your engineer's github?",
                name: 'engineerGithub',
            },
        ])
            .then((responseE) => {
                Engineers.push(responseE)
                console.log(Engineers)
                inquire()
            })
    } else if(responseContinued == 'Add an Intern') {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of your intern?',
                name: 'intern',
            },

            {
                type: 'number',
                message: "What is the your intern's id?",
                name: 'internId',
            },

            {
                type: 'input',
                message: "What is the your intern's email?",
                name: 'internEmail',
            },

            {
                type: 'input',
                message: "What is the your intern's school?",
                name: 'internSchool',
            },
        ])
            .then((responseI) => {
                Interns.push(responseI)
                console.log(Interns)
                inquire()
            })
    } else { 
        manager.createCard()
        manager.createCardLastLi()
        generateEngineers()
        generateInterns()

        fs.writeFile('./dist/team.html', 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Your Team</title>
</head>
<body>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd; height: 18vh;">
        <div class="container-fluid" style="justify-content: center;">
            <span class="navbar-text">
            <h1>My Team</h1>
            </span>
        </div>
    </nav>

    <main class="p-5" style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center;">
        ${arrayOfCards.join('')}
    </main>
    
</body>
</html>`
        , (err) =>
            err ? console.log(err) : console.log("Your team's website has been created!")
        )
    } 
}


