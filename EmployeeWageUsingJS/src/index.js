const EmployeeWage = require("./employeeWage");

// Valid Employee (Should Pass)
console.log("----- Valid Employee -----");
const validEmployee = new EmployeeWage(101, "Vidhi Jain", 5000, "F", "2024-01-15");
console.log(validEmployee.getEmployeeDetails());

// Invalid Employee Cases
console.log("\n----- Invalid Employee Cases -----");

// Invalid ID (Should Fail)
new EmployeeWage(0, "John Doe", 4000, "M", "2024-02-20");

// Invalid Salary (Should Fail)
new EmployeeWage(102, "Jane Doe", -100, "F", "2024-02-20");

// Invalid Gender (Should Fail)
new EmployeeWage(103, "Alex Smith", 4500, "X", "2024-02-20");

// Future Date (Should Fail)
new EmployeeWage(104, "Emma Johnson", 6000, "F", "2026-05-10");