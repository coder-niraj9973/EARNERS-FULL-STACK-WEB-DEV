//salary bonus

let salary = 10000;
let yearsOfExperience = 2;

let originalSalary = salary;
let bonus = 0;
let finalSalary;

if (yearsOfExperience >= 10) {
    bonus = salary * 20 / 100;
}
else if (yearsOfExperience >= 5) {
    bonus = salary * 10 / 100;
}
else if (yearsOfExperience >= 2) {
    bonus = salary * 5 / 100;
}

finalSalary = originalSalary + bonus;

console.log(originalSalary);
console.log(bonus);
console.log(finalSalary);
