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
    };  
}

function generateInterns() {
    for(i = 0; i < Interns.length; i++){
        InternsObject[i] = new Intern(Interns[i].intern, Interns[i].internId, Interns[i].internEmail, Interns[i].internSchool)
        InternsObject[i].createCard()
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
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${this.getName()}</h5>
        <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${this.getId()}</li>
        <li class="list-group-item">Email: ${this.getEmail()}</li>
        <li class="list-group-item">${Object.keys(this)[3]}: ${this[Object.keys(this)[3]]}</li>
        </ul>
    </div>
    `);
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
        generateEngineers()
        generateInterns()

        fs.writeFile('./assets/team.html', 
arrayOfCards.join('')
        , (err) =>
            err ? console.log(err) : console.log("Your team's website has been created!")
        )
    } 
}


