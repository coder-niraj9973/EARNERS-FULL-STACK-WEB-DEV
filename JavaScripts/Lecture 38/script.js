// "use strict"


// student.printName();





// // function fun1(){
// //     let name = "FAriha"

// //     function fun2(){
// //         console.log(name);
// //     }

// //     return fun2;
// // }

// // let result2 = fun1();

// // result2();



// // console.log(this);

// // function fun1(){
// //     console.log(this);
// // }

// // fun1();




// let student = {
//     name : "Aman",

//     printName : function(){
//         console.log("Hii", this.name);
//     }
// }

// let student2 = {
//     name : "Pritam",
//     printName : student.printName,
// }

// student2.printName();

var name = "Something";
let product = {
    name : "Iphone",

    printName : () => {
        console.log(this.name);             
    }
}

product.printName();