const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const stringCheck = (word) => {
    return typeof word === 'string'
}

let Engineers = new Array
let Interns = new Array
let manager

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
        console.log(manager)
        inquire()
    })    


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
            fs.writeFile('./assets/team.html', 
`
${JSON.stringify(Engineers)}
${JSON.stringify(Interns)}
${JSON.stringify(manager)}
`
            , (err) =>
                err ? console.log(err) : console.log("Your team's website has been created!")
            )
        } 
}


