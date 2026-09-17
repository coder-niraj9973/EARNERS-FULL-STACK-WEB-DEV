

// const p = new Promise(function (resolve, reject) {

//     // resolve("hiii")
//     reject("Server down hai beta")

// });

// // console.log(typeof p);                   //object
// // console.log(p);

// // p.then(function onFulFilled(val) {
// //     console.log(val);
// // },
// //     function onRejected(val) {
// //         console.log(val);
// // })

// // const res = p.then(function (val) {
// //     console.log(val);
// // },
// //     function (val) {
// //         console.log(val);
// // })

// // console.log(res);



// const res = p.then(function (val) {
//     console.log(val);
// })
//     .then(() => { })
//     .then()
//     .then()
//     .catch(function (val) {
//         console.log(val);
//     }).finally(function (){
//         console.log("Ye to Hamesha Chalega");
//     })





// console.log("a");

// const p2 = new Promise(function f1(resolve, reject) {
//     console.log("b");
//     resolve("hello")
// })

// p2.then(function f2(val) {
//     console.log("then");
//     console.log(val);

// }).catch(function f3() {
//     console.log("catch");

// }).finally(function f4() {
//     console.log("finally");
// })

// console.log("c");




// const p3 = new Promise(function (resolve, reject){

// })







function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");

        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu");
            let price = 500;
            resolve(price)
        }, 2000)
    })


}



function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to Cart...");

        setTimeout(function fun2() {
            console.log("Pizza added to Cart");
            resolve(price)
        }, 3000)
    })
}



function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payement Initiated , Amount: ${price}`)

        setTimeout(function fun3() {
            let isPaymentSuccess = false;

            if (isPaymentSuccess) {
                console.log(`Payment Completed , Amount : ${price}`);
                resolve();
            } else {
                reject("Bhaiya payment falied")
            }
        }, 5000)
    })
}


// searchPizza().then(function (price){
//     console.log(price);
// })


let res = searchPizza()

res.then(function (price) {
    console.log(price);
    return addToCart(price)

}).then(function (price) {
    return payment(price);
}).then(function () {
    console.log("Bas aa hi gya pizza");
}).catch(function (err) {
    console.log(err);
})

