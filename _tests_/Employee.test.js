const Employee = require("lib\Employee.js");


test("Create a new employee", () => {
    const employeeChoice = new Employee();
    expect(typeof(employeeChoice)).toBe("object");
})

test("Name test", () => {
    const name = "Courtney"
    const employeeChoice = new Employee(name);
    expect(employeeChoice.name).toBe(name);
})

test("ID test", () => {
    const id = "2"
    const employeeChoice = new Employee("Courtney", id);
    expect(employeeChoice.id).toBe(id);
})

test("Email test", () => {
    const email = "courtneymkirk@hotmail.com"
    const employeeChoice = new Employee("Courtney", 2, email);
    expect(employeeChoice.email).toBe(email);
})

test("Obtain name with getName", () => {
    const testName = "Courtney"
    const employeeChoice = new Employee(getName);
    expect(employeeChoice.getName()).toBe(testName);
})

test("Testing ID with getID", () => {
    const testID = "2"
    const employeeChoice = new Employee("Courtney", getID);
    expect(employeeChoice.getID()).toBe(testID);
})

test("Testing email with getEmail", () => {
    const testEmail = "courtneymkirk@hotmail.com"
    const employeeChoice = new Employee("Courtney", 2, testEmail);
    expect(employeeChoice.getEmail()).toBe(testEmail);
})

test("Test role", () => {
    const returnValue = "Employee"
    const employeeChoice = new Employee("Courtney", 2, "courtneymkirk@hotmail.com");
    expect(employeeChoice.testRole()).toBe(returnValue);
});