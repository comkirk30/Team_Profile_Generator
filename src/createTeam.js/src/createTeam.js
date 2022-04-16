const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function generateCards(team) {
  let cards = [];
  for (let i = 0; i < team.length; i++) {
    const teamArray = team[i];
    switch (teamArray.getRole()) {
      case "Engineer":
        const engineer = new Engineer(
          teamArray.name,
          teamArray.id,
          teamArray.email,
          teamArray.github
        );
        cards.push(makeEngineerCard(engineer));
        break;
      case "Manager":
        const manager = new Manager(
          teamArray.name,
          teamArray.id,
          teamArray.email,
          teamArray.officeNumber
        );
        cards.push(makeManagerCard(manager));
        break;
      case "Intern":
        const intern = new Intern(
          teamArray.name,
          teamArray.id,
          teamArray.email,
          teamArray.school
        );
        cards.push(makeInternCard(manager));
        break;
    }
  }

  return cards.join(" ");
}

let makeEngineerCard = function (Engineer) {
  return `
            <div class="col-4 mt-4">
            <div class="card">
                <h2 class="card-title">${Engineer.name}</h2>
                <h2 class="card-title">
                <div class="card-header bg-success text-warning">
                <h3 class="card-title"><ion-icon name="save-outline"></ion-icon>  ${Engineer.getRole()}</h3>
                </div>

                <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${Engineer.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${
                      Engineer.email
                    }">${Engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;
};

let makeManagerCard = function (Engineer) {
  return `
              <div class="col-4 mt-4">
              <div class="card">
                  <h2 class="card-title">${Manager.name}</h2>
                  <h2 class="card-title">
                  <div class="card-header bg-success text-warning">
                  <h3 class="card-title"><ion-icon name="save-outline"></ion-icon>  ${Manager.getRole()}</h3>
                  </div>

                  <div class="card-body bg-light">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${Manager.getID()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${
                        Manager.email
                      }">${Manager.email}</a></li>
                      <li class="list-group-item">Office Number: ${Manager.officeNumber()}</li>
                  </ul>
              </div>
          </div>
      </div>     
      `;


      let makeInternCard = function (Intern) {
        return `
        <div class="col-4 mt-4">
        <div class="card">
            <h2 class="card-title">${Intern.name}</h2>
            <h2 class="card-title">
            <div class="card-header bg-success text-warning">
            <h3 class="card-title"><ion-icon name="save-outline"></ion-icon> ${Intern.getRole()}</h3>
            </div>

            <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  Intern.email
                }">${Intern.email}</a></li>
                <li class="list-group-item">Office Number: ${Manager.getSchool()}</li>
            </ul>
        </div>
    </div>
</div>     
`;
 };



 
