class EmployeeWage {
    constructor(name, totalDays = 20) {
        this.name = name;
        this.wagePerHour = 20;
        this.totalDays = totalDays;
        this.dailyWages = [];
        this.generateWages();
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

    // a. Calculate Total Wage using reduce
    getTotalWage = () => 
        this.dailyWages.reduce((total, day) => total + day.wage, 0);

    // b. Show the Day along with Daily Wage using map
    getDailyWages = () => 
    this.dailyWages.map(({ day, wage }) => `Day ${day}: $${wage}`);


    // c. Show Days when Full time wage (160) was earned
    getFullTimeDays = () => 
        this.dailyWages.filter(({ wage }) => wage === 160).map(({ day }) => day);

    // d. Find first occurrence of Full Time Wage (160)
    getFirstFullTimeDay = () => 
        this.dailyWages.find(({ wage }) => wage === 160)?.day || "None";

    // e. Check if every full-time wage entry is truly full-time
    isEveryFullTimeCorrect = () => 
        this.dailyWages.filter(({ wage }) => wage > 0).every(({ wage }) => wage === 160 || wage === 80);

    // f. Check if there is any Part Time Wage (80)
    hasPartTimeWage = () => 
        this.dailyWages.some(({ wage }) => wage === 80);

    // g. Find the number of days the employee worked
    getDaysWorked = () => 
        this.dailyWages.filter(({ hours }) => hours > 0).length;
}

module.exports = EmployeeWage;