const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("libIntern.js");
const fs = require("fs");
const emailValidator = require("email-validator");
const createTeam = require("");

team = [];


const askManager = () => {

    console.log(`
    
===================================================
            Create Team Profile
===================================================
    
    `)

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is manager name?',
        validate: answer => {
            if (answer !== "") {
                return true;
            }
            return "Enter manager name"
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is manager ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is manager email?',
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else {
               return 'Enter a valid manager email'
    }
}
},

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager office number?',
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: 'What kind of new team member are you adding?',
        choices: ['Engineer', 'Intern', 'Decline to add new member'],
    }
])
    
    .then((mgrAnswers) => {
        const manager = new Manager(mgrAnswers.name, mgrAnswers.id, mgrAnswers.email, mgrAnswers.officeNumber)
        team.push(manager)
        switch(mgrAnswers.addTeamMember) {
            case 'Engineer':
                askEngineer();
                break;
            case 'Intern':
                askIntern();
                break;
            default:
                writeToFile('dist\index.html', createTeam(team))
        }
    });

};

    
const askEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter the engineer name"
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is engineer ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is engineer email?',
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else {
                   return 'Enter a valid engineer email'
        }
    }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineer GitHub username?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter the engineer GitHub username"
             }
            },
            {
            type: 'list',
            name: 'addTeamMember',
            message: 'What kind of new team member are you adding?',
            choices: ['Engineer', 'Intern', 'Decline to add new member'],
        }
    ])

    .then((engAnswers) => {
        const manager = new Manager(engAnswers.name, engAnswers.id, engAnswers.email, engAnswers.officeNumber)
        team.push(manager)
        switch(engAnswers.addTeamMember) {
            case 'Engineer':
                askEngineer();
                break;
            case 'Intern':
                askIntern();
                break;
            default:
                writeToFile('dist\index.html', createTeam(team))
        }
    })
    






    
