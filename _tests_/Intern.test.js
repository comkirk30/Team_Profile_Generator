const Intern = require("lib\Intern.js");

test("Create a school name", () => {
    const testSchoolName = "School Name";
    const employeeChoice = new Intern("Courtney", 2, "courtneymkirk@hotmail.com", testSchoolName);
    expect(employeeChoice.school).toBe(testSchoolName);
})

test("Test testSchoolName will give School Name", () => {
    const testSchoolName = "School Name";
    const employeeChoice = new Intern("Courtney", 2, "courtneymkirk@hotmail.com", testSchoolName);
    expect(employeeChoice.testSchoolName).toBe(testSchoolName);
})

test("Test role", () => {
    const returnValue = "Intern";
    const employeeChoice = new Intern("Courtney", 2, "courtneymkirk@hotmail.com", "School Name");
    expect(employeeChoice.testRole).toBe(returnValue);
});