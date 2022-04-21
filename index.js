const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require("fs");
const emailValidator = require("email-validator");
//const createTeam = require("./src/createTeam");

team = [];

const askManager = () => {
  console.log(`
    
===================================================
            Create Team Profile
===================================================
    
    `);

inquirer
    .prompt([
        {
        type: "input",
        name: "name",
        message: "What your name?"
    ])
        };

        
    
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is manager name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter manager name";
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is manager ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is manager email?",
        validate: (value) => {
          if (emailValidator.validate(value)) {
            return true;
          } else {
            return "Enter a valid manager email";
          }
        },
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager office number?",
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "What kind of new team member are you adding?",
        choices: ["Engineer", "Intern", "Decline to add new member"],
      },
    ])

    .then((mgrAnswers) => {
      const manager = new Manager(
        mgrAnswers.name,
        mgrAnswers.id,
        mgrAnswers.email,
        mgrAnswers.officeNumber
      );
      team.push(manager);
      switch (mgrAnswers.addTeamMember) {
        case "Engineer":
          askEngineer();
          break;
        case "Intern":
          askIntern();
          break;
        default:
        //   writeToFile("distindex.html", createTeam(team));
      }
    });
};

const askEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter the engineer name";
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is engineer ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is engineer email?",
        validate: (value) => {
          if (emailValidator.validate(value)) {
            return true;
          } else {
            return "Enter a valid engineer email";
          }
        },
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer GitHub username?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Enter the engineer GitHub username";
        },
      },
      {
        type: "list",
        name: "addTeamMember",
        message: "What kind of new team member are you adding?",
        choices: ["Engineer", "Intern", "Decline to add new member"],
      },
    ])

    .then((engAnswers) => {
      const engineer = new Engineer(
        engAnswers.name,
        engAnswers.id,
        engAnswers.email,
        engAnswers.github
      );
      team.push(engineer);
      switch (engAnswers.addTeamMember) {
        case "Engineer":
          askEngineer();
          break;
        case "Intern":
          askIntern();
          break;
        default:
        //      writeToFile("distindex.html", createTeam(team));
      }
    });

  const askIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the intern name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter the intern name";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is intern ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is intern email?",
          validate: (value) => {
            if (emailValidator.validate(value)) {
              return true;
            } else {
              return "Enter a valid intern email";
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is the intern school?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Enter the intern school";
          },
        },
        {
          type: "list",
          name: "addTeamMember",
          message: "What kind of new team member are you adding?",
          choices: ["Engineer", "Intern", "Decline to add new member"],
        },
      ])

      .then((intAnswers) => {
        const intern = new Intern(
          intAnswers.name,
          intAnswers.id,
          intAnswers.email,
          intAnswers.school
        );
        team.push(intern);
        switch (intAnswers.addTeamMember) {
          case "Engineer":
            askEngineer();
            break;
          case "Intern":
            askIntern();
            break;
          default:
          //   writeToFile("distindex.html", createTeam(team));
        }
      });
  };

  askManager();

  function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
      if (err) throw err;
      console.log("file successfully saved");
    });
  }
};
