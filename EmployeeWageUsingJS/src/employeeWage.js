class EmployeeWage {
    constructor(id, name, salary, gender, startDate, totalDays = 20) {
        try {
            // Validate Employee ID (non-zero positive number)
            if (!/^[1-9]\d*$/.test(id)) throw new Error("Invalid Employee ID! Must be a positive number.");

            // Validate Salary (non-zero positive number)
            if (!/^[1-9]\d*$/.test(salary)) throw new Error("Invalid Salary! Must be a positive number.");

            // Validate Gender (M or F)
            if (!/^[MF]$/.test(gender)) throw new Error("Invalid Gender! Must be 'M' or 'F'.");

            // Validate Start Date (Should not be in the future)
            let today = new Date();
            let empDate = new Date(startDate);
            if (empDate > today) throw new Error("Invalid Start Date! Cannot be a future date.");

            // Assign values if all validations pass
            this.id = id;
            this.name = name;
            this.salary = salary;
            this.gender = gender;
            this.startDate = empDate;
            this.wagePerHour = 20;
            this.totalDays = totalDays;
            this.dailyWages = [];
            this.generateWages();
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    // Function to determine work hours
    getWorkHours = () => {
        let workType = Math.floor(Math.random() * 3); // 0, 1, or 2
        return workType === 0 ? 0 : workType === 1 ? 4 : 8;
    };

    // Function to generate daily wages
    generateWages = () => {
        for (let day = 1; day <= this.totalDays; day++) {
            let hours = this.getWorkHours();
            let wage = hours * this.wagePerHour;
            this.dailyWages.push({ day, hours, wage });
        }
    };

    // Function to display employee details
    getEmployeeDetails = () => ({
        ID: this.id,
        Name: this.name,
        Salary: `$${this.salary}`,
        Gender: this.gender,
        StartDate: this.startDate.toDateString()
    });
}

module.exports = EmployeeWage;
