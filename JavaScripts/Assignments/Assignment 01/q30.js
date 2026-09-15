// Student Result

let studentName = "Rahul";
let rollNumber = 101;
let mathMarks = 85;
let scienceMarks = 78;
let englishMarks = 92;

let totalMarks = mathMarks + scienceMarks + englishMarks;
let percentage = (totalMarks / 300) * 100;

let grade;

if (percentage >= 90) {
    grade = "A";
}
else if (percentage >= 80) {
    grade = "B";
}
else if (percentage >= 70) {
    grade = "C";
}
else if (percentage >= 60) {
    grade = "D";
}
else if (percentage >= 40) {
    grade = "E";
}
else {
    grade = "F";
}

let result;

if (mathMarks >= 40 && scienceMarks >= 40 && englishMarks >= 40) {
    result = "PASS";
}
else {
    result = "FAIL";
}

console.log("-------------------------");
console.log("STUDENT RESULT");
console.log("-------------------------");
console.log("Name :", studentName);
console.log("Roll No :", rollNumber);
console.log("Math :", mathMarks);
console.log("Science :", scienceMarks);
console.log("English :", englishMarks);
console.log("Total :", totalMarks);
console.log("Percentage :", percentage + "%");
console.log("Grade :", grade);
console.log("Result :", result);
console.log("-------------------------");