let student = {
    name: "niraj",
    rollNo: 34,
    subjects: ["math", "english", "hindi"],
}

// let {subjects, name, rollNo}= student;       //destrunturing
// console.log(subjects);


//how to rename key

// let {subjects : vishay, ...variable} = student;          //rest at last

// // let vishay = subjects;
// console.log(vishay);

// let {subjects : vishay, totalMarks = 500, ...variable} = student;          //rest at last

// // let vishay = subjects;
// // console.log(vishay);
// console.log(totalMarks);



let obj1 = {
    name: "nishant",
    phone: 123465789,
}

let obj2 = {
    address: "India",
    aadharCard: 1324567894561,
    name: "yash",
}

let mergedObj = { ...obj1, ...obj2 };                     //spread operator merging

// console.log(mergedObj);


//array and object update

const arr = [1, 2, 3, 4]

arr[1] = "updated"

// console.log(arr);


const obj = {
    name: "kasturi",
    rollNo: 23,
}

obj["name"] = "prityam"             //updating object
obj.name = "sumit"                  //updating object

delete obj.rollNo;                  //delete the property
// console.log(obj);

// console.log(obj.address?.street);

let arr1 = [1, 2, 3, 3, 4, 5, 6]

// arr1.splice(1, 3)                 //delete in between array
// arr1.splice(3, 0, "added")           //add in between array

let trimArr = arr.slice(1, 3);      //trim in array

// console.log(trimArr);



// let x = arr1.indexOf(3)
// console.log(x);

let res = arr1.find((value) => {
    return value === 3;
})
// console.log(res);

let resIndex = arr1.findIndex((value) => {
    return value === 3;
})

// console.log(resIndex);


//flat

let arr3 = [1, 2, 3, 4, 5, 6, [7, 8, 9, [9, 10, 11]]]


// console.log(...arr3);
// console.log(arr3.flat(Infinity));


//mutability

let arr4 = [4, 5, 6, 65, 3, 3, 6, 6]

let arrCopy = arr4;                    //reference going
let arrCopy2 = [...arr4];             //spread operator/ khud ka

arrCopy2.pop()

console.log("arr4: ", arr4);
console.log("arrCopy: ", arrCopy2);