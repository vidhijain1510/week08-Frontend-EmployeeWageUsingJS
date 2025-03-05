class EmployeeWage {
    constructor(name) {
        this.name = name;
        this.isPresent = Math.random() < 0.5 ? "Present" : "Absent";
    }

    getAttendance() {
        return `${this.name} is ${this.isPresent}`;
    }
}

module.exports = EmployeeWage;