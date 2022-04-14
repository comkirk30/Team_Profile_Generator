const Manager = require("lib\Manager.js");

test("Create office number", () => {
    const createOfficeNumber = "38";
    const employeeChoice = new Manager("Courtney", 2, "courtneymkirk@hotmail.com", createOfficeNumber);
    expect(employeeChoice.officeNumber).toBe(createOfficeNumber);
})

test("Test createOfficeNumber return office number", () => {
    const createOfficeNumber = 38;
    const employeeChoice = new Manager("Courtney", 2, "courtneymkirk@hotmail.com", createOfficeNumber);
    expect(employeeChoice.getOfficeNumber).toBe(createOfficeNumber);
})

test("Test role", () => {
    const returnValue = "Manager";
    const employeeChoice = new Manager("Courtney", 2, "courtneymkirk@hotmail.com", 38);
    expect(employeeChoice.testRole).toBe(returnValue);
});