const EmployeeWage = require("./employeeWage");

const employee = new EmployeeWage("Kapil Namdeo");

console.log(`Total Wage: $${employee.getTotalWage()}`);
console.log("Daily Wages:", employee.getDailyWages());
console.log("Full-time Wage Days:", employee.getFullTimeDays());
console.log("First Full-time Wage Day:", employee.getFirstFullTimeDay());
console.log("Are all Full-Time Wages correct?", employee.isEveryFullTimeCorrect());
console.log("Is there any Part-Time Wage?", employee.hasPartTimeWage());
console.log("Total Days Worked:", employee.getDaysWorked());