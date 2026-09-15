// // arithmetic operators;


// let num1 = 2;
// let num2 = 4;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);



//increment and decrement

// let num = 45;
// num = num + 2;


// console.log(++num);     //46
// console.log(num++);     //46
// console.log(num);     //47

// console.log(--num);     //44
// console.log(num--);     //44
// console.log(num);     //43


//assignment operator

// let num = 2;
// num += 5;
// console.log(num);           //7
// num -= 5;
// console.log(num);           //2
// num *= 5;                   
// console.log(num);           //10
// num /= 5;                   
// console.log(num);           //2
// num %= 5;                   
// console.log(num);           //2
// num **= 5;                   
// console.log(num);           //32



// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6);         //false
// console.log(3 < 6);         //true
// console.log(3 >= 6);        //false
// console.log(3 <= 6);        //true
// console.log(3 == 6);        //false
// console.log(3 != 6);        //true


//loose equality

// console.log("5" == 5);


//strict equality

// console.log("5" === "5");


// console.log(true && false);
// console.log(true || false);


// const age = 20;
// const hasId = true;

// const canEnterClub = age >= 18 && hasId == true;

// console.log(canEnterClub);


// console.log(!1);

// const isL/oggedIn = tru/e

// /if (isLoggedIn) {
//     console.log("You can like, comment");
// } 
//     else{
//     console.log("You can't");
// }


// let day = "mon";

// if (day === "mon"){
//     console.log("1st day of the week");
// }
// else if (day === "tue"){
//     console.log("2nd day of the week");

// }
// else if (day === "wed"){
//     console.log("3nd day of the week");

// }
// else if (day === "thu"){
//     console.log("4nd day of the week");

// }
// else if (day === "fri"){
//     console.log("5nd day of the week");

// }
// else if (day === "sat"){
//     console.log("6nd day of the week");

// }
// else if (day === "sun"){
//     console.log("7nd day of the week");

// }

// else{
//     console.log("Wrong day");

// }




const day = "fri";

switch (day) {
    case "mon":
        console.log("1st day of the week");
        break;
    case "tue":
        console.log("2nd of the week");
        break;
    case "wed":
        console.log("3rd day of the week");
        break;
    case "thu":
        console.log("4th day of the week");
        break;
    case "fri":
        console.log("5th day of the week");
        break;
    case "sat":
        console.log("6th day of the week");
        break;
    case "sun":
        console.log("7th day of the week");
        break;

    default:
        console.log("wrong day");




}





