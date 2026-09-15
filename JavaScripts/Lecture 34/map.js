//map

let originalPrices = [465, 485, 789]

let discountedPrices = []           //blank array

// for (value of originalPrices){      //iteration for value
//     discountedPrices.push(value * 0.9)  // 10% discount
// }

originalPrices.forEach((value) => {
    discountedPrices.push(value * 0.9)
})

// console.log(originalPrices);
// console.log(discountedPrices);

const discountedPrices2 = originalPrices.map((value) => value * 0.9)//map


// console.log(originalPrices);
// console.log(discountedPrices2);

let students = [                                //array of objects/ array ke objects
    {
        name: "Ayaan",
        marks: 56,
    },

    {
        name: "Manshi",
        marks: 56,
    },

    {
        name: "Dev",
        marks: 33,
    },

    {
        name: "Shivan",
        marks: 30,
    },

    {
        name: "Allaudin",
        marks: 25,
    },
]

// let studentName = []

// students.forEach((value) => {
//     studentName.push(value.name)
// })

//map
const studentName = students.map((student) => student.name)
const studentMarks = students.map((student) => student.marks)

// console.log(studentName);
// console.log(studentMarks);

let boostedMarks = students.map((student) => ({ ...student, marks: student.marks + 10 })) //spread means khol dena

// console.log(boostedMarks);



//filter

// let failedStudents = []

// students.forEach((student) => {
//     if(student.marks < 33){
//         failedStudents.push(student)
//     }
// });

const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name); //chaining

// console.log(failedStudents);




//REDUCE

let marks1 = [56, 24, 63, 49, 78]

// let totalMarks = 0

// marks1.forEach((marks1) => totalMarks += marks1) 

// console.log(totalMarks);

// const totalMarks  = marks1.reduce((totalMarks, mark) => totalMarks + mark, 0)
// 
const totalMarks = students.reduce((totalMarks, student) => totalMarks + student.marks, 0)

// console.log(totalMarks);


const attendance = ["present", "present", "absent", "present", "absent"]

// let obj = {}

// attendance.forEach((value) => {

//     if (obj[value]) {
//         obj[value] = obj[value] + 1;
//     }
//     else {
//         obj[value] = 1;
//     }
// })

// console.log(obj);


// by reduce

const obj = attendance.reduce((acc, value) => {
    // if (acc[value]) {
    //     acc[value] = acc[value] + 1;
    // }
    // else {
    //     acc[value] = 1;
    // }

    acc[value] = (acc[value] || 0) + 1 ; 
    return acc
}, {})

console.log(obj);