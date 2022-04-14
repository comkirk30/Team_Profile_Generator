const Engineer = require("lib\Employee.js");

test("Test to create a github", () => {
    const tryGithub = "comkirk30";
    const employeeChoice = new Engineer("Courtney", 2, "courtneymkirk@hotmail.com", tryGithub);
    expect(employeeChoice.github).toBe(tryGithub);
})

test("Test tryGithub will return github", () => {
    const tryGithub = "comkirk30";
    const employeeChoice = new Engineer("Courtney", 2, "courtneymkirk@hotmail.com", tryGithub);
    expect(employeeChoice.tryGithub).toBe(tryGithub);
})

test("Test role", () => {
    const returnValue = "Engineer";
    const employeeChoice = new Engineer("Courtney", 2, "courtneymkirk@hotmail.com", comkirk30);
    expect(employeeChoice.testRole).toBe(returnValue);
})